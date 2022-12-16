import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import { PipelineConfig } from './types';

export function listFiles(dir: string, basePath: string = dir): string[] {
    // Get the list of files in the directory
    const files = fs.readdirSync(dir);
    let filesWithFullPath: string[] = []

    // Loop through the files
    for (const file of files) {
        // Construct the full path for the file
        const filePath = path.join(dir, file);

        // Check if the file is a directory
        if (fs.lstatSync(filePath).isDirectory()) {
            // If it's a directory, list the files in the directory recursively
            filesWithFullPath = [...filesWithFullPath, ...listFiles(filePath, basePath)];
        } else {
            // If it's a file, print the full relative path with the filename
            filesWithFullPath.push(filePath)
        }
    }
    return filesWithFullPath;
}

export function parseYaml<T = unknown>(filePath: string): T {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents) as T;
}