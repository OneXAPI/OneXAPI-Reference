cp -r ./src ./tmp
rm tmp/General.js
python preProcessing.py
apidoc -i tmp/ -o out/ -t template/
python postProcessing.py
rm -rf tmp