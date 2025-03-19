#!/bin/bash

while true; do
    changes=$(git ls-files --modified --others --exclude-standard)
    
    if [ -n "$changes" ]; then
        for file in $changes; do
            git add "$file"
            git commit -m "Commit du fichier $file"
            git push
        done
    else
        echo "Aucun changement détecté."
    fi

    sleep 10  # Attendre 60 secondes avant de recommencer
done
