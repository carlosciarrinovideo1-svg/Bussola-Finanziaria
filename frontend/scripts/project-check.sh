#!/bin/bash

echo "================================"
echo " BUSSOLA FINANZIARIA CHECK"
echo "================================"

echo ""
echo "📍 Posizione progetto:"
pwd

echo ""
echo "📦 Stato Git:"
git status

echo ""
echo "🔨 Build progetto:"
npm run build

echo ""
echo "✅ Controllo completato"
