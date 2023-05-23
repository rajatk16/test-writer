import { join } from 'node:path';
import { prompt } from 'enquirer';
import { promisify } from 'node:util';
import { readFile, promises } from 'node:fs';
import { Command, Flags, ux } from '@oclif/core';
import { Configuration, OpenAIApi } from 'openai';

const readFileAsync = promisify(readFile);

export default class Unit extends Command {
  static description = 'Write Unit Tests';

  static flags = {
    version: Flags.version({ char: 'v' }),
    input: Flags.string({
      char: 'i',
      description: 'Input File containing Code to Test',
    }),
    output: Flags.string({
      char: 'o',
      description: 'Outfile File to write the tests in',
    }),
  };

  async run(): Promise<void> {
    let apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      apiKey = (
        (await prompt({
          type: 'invisible',
          name: 'apiKey',
          message: 'Please enter your OPENAI API KEY',
        })) as any
      ).apiKey;
    }
    const configuration = new Configuration({
      apiKey,
    });
    const openai = new OpenAIApi(configuration);

    const { flags } = await this.parse(Unit);

    if (typeof flags.input === 'undefined') {
      flags.input = (
        (await prompt({
          type: 'input',
          name: 'input',
          message: 'Which file do you want to write tests for?',
        })) as any
      ).input;
    }

    if (!flags.input) {
      throw Error('Invalid Output File Path');
    }

    if (typeof flags.output === 'undefined') {
      flags.output = (
        (await prompt({
          type: 'input',
          name: 'output',
          message: 'Where do you want the tests to be written?',
        })) as any
      ).output;
    }

    if (!flags.output) {
      throw Error('Invalid Output File Path');
    }

    const framework = (
      (await prompt({
        type: 'select',
        name: 'framework',
        message: 'Which Framework do you want your Tests in?',
        choices: ['Jest', 'Mocha'],
      })) as any
    ).framework;

    const filepath = join(__dirname, flags.input);
    const code = await readFileAsync(filepath, 'utf8');

    const UNIT_TEST_REQUEST = `Generate a unit test with the ${framework} syntax, containing relevant assertions and required packages in a single 'describe' block. Import the functions from ${filepath} and use them to test the following code snippet: ${code}.`;

    ux.action.start(
      `Writing tests for ${flags.input} file using ${framework} syntax in ${flags.output} file`,
    );

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: UNIT_TEST_REQUEST,
        },
      ],
      temperature: 0,
      max_tokens: 1000,
    });

    const output = response.data.choices[0].message?.content;

    if (!output) {
      throw Error('No Code Found');
    }

    await promises.writeFile(join(__dirname, flags.output), output);

    ux.action.stop();
  }
}
