#!/bin/bash
FILE=~/Desktop/logisim.jar

if type -p java; then
    echo "Found java executable in PATH"
else
    echo "Please install Java first :)"
fi

if test -f "$FILE"; then
    echo "$FILE exists. Running from that"
    java -jar $FILE
else
    echo "$FILE doesn't exists. Downloading"
    curl -o ~/Desktop/logisim.jar  https://ekojs.com/logisim.jar
    java -jar $FILE
fi
