
with open("input.txt", "r") as f:
    for line in f.readlines():
        line = line.replace("\n", "").replace("\t", "    ")
        line = line.replace("/* or */", "// or")
        print(" *  "+line)