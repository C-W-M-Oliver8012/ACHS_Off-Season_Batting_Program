#!/bin/bash

printf "file name: "

read fileName

pandoc -s ${fileName}.md -o ../${fileName}.html -c theme.css
