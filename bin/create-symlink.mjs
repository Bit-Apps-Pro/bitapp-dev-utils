#!/usr/bin/env node

/* eslint-disable no-console */
import fs from 'node:fs'
import process from 'node:process'
/**
  This script creates a symlink from the source directory to the destination directory.
  The source directory is the first argument and the destination directory is the second argument.
  The script is run using the following command:
  For example:
  node scripts/create-symlink.js <source-directory> <destination-directory>
 */
const [, , sourceDir, destinationDir] = process.argv

fs.symlink(sourceDir, destinationDir, (err) => {
  if (err)
    console.log(err)
  else console.log('\n Symlink Created Successfully"\n')
})
