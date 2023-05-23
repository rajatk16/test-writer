oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g test-writer
$ test-writer COMMAND
running command...
$ test-writer (--version)
test-writer/1.0.0 darwin-x64 node-v14.18.3
$ test-writer --help [COMMAND]
USAGE
  $ test-writer COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`test-writer help [COMMANDS]`](#test-writer-help-commands)
* [`test-writer plugins`](#test-writer-plugins)
* [`test-writer plugins:install PLUGIN...`](#test-writer-pluginsinstall-plugin)
* [`test-writer plugins:inspect PLUGIN...`](#test-writer-pluginsinspect-plugin)
* [`test-writer plugins:install PLUGIN...`](#test-writer-pluginsinstall-plugin-1)
* [`test-writer plugins:link PLUGIN`](#test-writer-pluginslink-plugin)
* [`test-writer plugins:uninstall PLUGIN...`](#test-writer-pluginsuninstall-plugin)
* [`test-writer plugins:uninstall PLUGIN...`](#test-writer-pluginsuninstall-plugin-1)
* [`test-writer plugins:uninstall PLUGIN...`](#test-writer-pluginsuninstall-plugin-2)
* [`test-writer plugins update`](#test-writer-plugins-update)
* [`test-writer unit`](#test-writer-unit)

## `test-writer help [COMMANDS]`

Display help for test-writer.

```
USAGE
  $ test-writer help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for test-writer.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `test-writer plugins`

List installed plugins.

```
USAGE
  $ test-writer plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ test-writer plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `test-writer plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ test-writer plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ test-writer plugins add

EXAMPLES
  $ test-writer plugins:install myplugin 

  $ test-writer plugins:install https://github.com/someuser/someplugin

  $ test-writer plugins:install someuser/someplugin
```

## `test-writer plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ test-writer plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ test-writer plugins:inspect myplugin
```

## `test-writer plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ test-writer plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ test-writer plugins add

EXAMPLES
  $ test-writer plugins:install myplugin 

  $ test-writer plugins:install https://github.com/someuser/someplugin

  $ test-writer plugins:install someuser/someplugin
```

## `test-writer plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ test-writer plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ test-writer plugins:link myplugin
```

## `test-writer plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ test-writer plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ test-writer plugins unlink
  $ test-writer plugins remove
```

## `test-writer plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ test-writer plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ test-writer plugins unlink
  $ test-writer plugins remove
```

## `test-writer plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ test-writer plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ test-writer plugins unlink
  $ test-writer plugins remove
```

## `test-writer plugins update`

Update installed plugins.

```
USAGE
  $ test-writer plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `test-writer unit`

Write Unit Tests

```
USAGE
  $ test-writer unit [-v] [-i <value>] [-o <value>]

FLAGS
  -i, --input=<value>   Input File containing Code to Test
  -o, --output=<value>  Outfile File to write the tests in
  -v, --version         Show CLI version.

DESCRIPTION
  Write Unit Tests
```

_See code: [dist/commands/unit.ts](https://github.com/rajatk16/test-writer/blob/v1.0.0/dist/commands/unit.ts)_
<!-- commandsstop -->
