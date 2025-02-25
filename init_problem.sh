#!/bin/bash

# Use flag -i|--i|-input|--input to create input.txt and set up index.js for input.

# Initialize variables
use_input=0
num=""

# Parse arguments
while [ "$#" -gt 0 ]; do
  case "$1" in
  -i | --i | -input | --input)
    use_input=1
    shift
    ;;
  *)
    if [ -z "$num" ]; then
      num="$1"
    else
      echo "Unexpected argument: $1"
      exit 1
    fi
    shift
    ;;
  esac
done

# Check if a problem number was provided
if [ -z "$num" ]; then
  echo "Usage: $0 [-i|-input|--input] <problem number>"
  exit 1
fi

dir_name="problem-$num"

# Create the directory
mkdir "$dir_name"

# Define the JavaScript content
js_content='const solvePuzzle = () => {
  
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();'

js_content_input='import { readFile } from "fs/promises";

const parseInput = (input) => {

};

const solvePuzzle = (input) => {

};

const main = async () => {
  try {
    const input = (await readFile("input.txt", "utf-8")).trim();
    console.log(solvePuzzle(input));
  } catch (err) {
    console.error(err);
  }
};

main();'

# Create index.js with the appropriate content based on the flag
if [ "$use_input" -eq 1 ]; then
  echo "$js_content_input" >"$dir_name/index.js"
else
  echo "$js_content" >"$dir_name/index.js"
fi

# Create README.md
readme_content="[Problem $num](https://projecteuler.net/problem=$num)"
echo "$readme_content" >"$dir_name/README.md"

# If the input flag is used, create an empty input.txt file
if [ "$use_input" -eq 1 ]; then
  touch "$dir_name/input.txt"
fi

echo "Folder '$dir_name' created with index.js, README.md$([ "$use_input" -eq 1 ] && echo ', and input.txt.' || echo '.')"
