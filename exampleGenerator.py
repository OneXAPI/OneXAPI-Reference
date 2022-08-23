
with open("input.txt", "r") as f:
    for line in f.readlines():
        if "// C++" in line or "# Python" in line:
            continue
        line = line.replace("\n", "").replace("\t", "    ")
        line = line.replace(");", ")__;") # due to apidoc parsing issue. This will be corrected by postProcessing.py
        line = line.replace("/* or */", "// or")
        print(" *  "+line)