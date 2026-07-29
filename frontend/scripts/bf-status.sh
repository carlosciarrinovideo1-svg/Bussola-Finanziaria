#!/bin/bash

echo "================================"
echo " BUSSOLA FINANZIARIA STATUS"
echo "================================"

echo
echo "📍 Progetto:"
pwd

echo
echo "📦 Git:"
git status

echo
echo "🔨 Build:"
npm run build

echo
echo "================================"
echo " CONTROLLO COMPLETATO"
echo "================================"
