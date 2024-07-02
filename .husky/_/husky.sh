#!/usr/bin/env sh
if [ -z "$husky_skip_init" ]; then
  debug () {
    if [ "$HUSKY_DEBUG" = "1" ]; then
      echo "husky (debug) - $1"
    fi
  }

  readonly hook_name="$(basename -- "$0")"
  debug "starting $hook_name..."

  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env variable is set to 0, skipping hook"
    exit 0
  fi

  if [ -f ~/.huskyrc ]; then
    debug "sourcing ~/.huskyrc"
    . ~/.huskyrc
  fi

  readonly husky_skip_init=1
  export husky_skip_init
  sh -e "$0" "$@"
  exitCode="$?"

  if [ $exitCode != 0 ]; then
    echo "husky - $hook_name hook exited with code $exitCode (error)"
  fi

  if [ $exitCode = 127 ]; then
    echo "husky - command not found in PATH=$PATH"
  fi

  exit $exitCode
fi


red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
no_color='\033[0m'

echo "\n${yellow}Executing pre-commit hook...${no_color}\n"

FILES_PATTERN='\.(tsx|ts|js)(\..+)?$'
FORBIDDEN='console\.[clear|dir|log|info|warn|error]'

#check for console. references in your code

if git diff --cached --name-only | \
    grep -E $FILES_PATTERN | \
    xargs grep --with-filename -n $FORBIDDEN | \
    grep -v '//';
then
    echo "\n${red}COMMIT REJECTED!  Found console. references. Please remove them before committing.\n${no_color}"
    exit 1;
fi
echo "${green}No console. references found!${no_color}\n"
echo "${green}Git pre-commit hook was successful!${no_color}\n";