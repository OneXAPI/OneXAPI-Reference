cp -r ./src ./tmp
rm tmp/General.js
python preProcessing.py
apidoc -i tmp/ -o docs/ -t template/
python postProcessing.py
rm -rf tmp