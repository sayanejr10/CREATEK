#!/bin/bash

while true; do
    # Vérifier s'il y a des fichiers modifiés ou non suivis
    changes=$(git status --porcelain)

    if [ -n "$changes" ]; then
        echo "Changements détectés, ajout et commit..."
        
        # Ajouter tous les fichiers modifiés et non suivis
        git add .

        # Commit avec un message automatique
        git commit -m "Commit automatique - $(date)"

        # Push vers le dépôt distant
        git push
    else
        echo "Aucun changement détecté."
    fi

    sleep 60  # Attendre 60 secondes avant de recommencer
done
