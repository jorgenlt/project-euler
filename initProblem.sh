#!/bin/bash

# Check if exactly one argument is provided
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <number>"
  exit 1
fi

num="$1"
dir_name="problem-$num"

# Create the directory named "problem-<number>"
mkdir "$dir_name"

# Define the JavaScript content
js_content='import { readFile } from "fs/promises";

const parseInput = (input) => {};

const solvePuzzle = (input) => {};

const main = async () => {
  try {
    const input = (await readFile("input.txt", "utf-8")).trim();
    
    console.log(solvePuzzle(input));
  } catch (err) {
    console.error(err);
  }
};

main();
'

# Create index.js with the defined content
echo "$js_content" >"$dir_name/index.js"

# Create a readme.md file with custom content (you can adjust the content as needed)
readme_content="Problem $num"
readme_content="[Problem $num](https://projecteuler.net/problem=$num)"
echo "$readme_content" >"$dir_name/README.md"

# Create an empty input.txt file
touch "$dir_name/input.txt"

echo "Folder '$dir_name' created with index.js, README.md, and input.txt."
