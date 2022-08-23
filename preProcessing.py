instruments = ["Spot","Futures"]

for instrument in instruments:
    with open("tmp/" + instrument + ".js", "r+") as writefile:
        out = ""
        with open("src/General.js", "r") as f:
            data = f.read()
            out = data.replace("__GENERAL__",instrument) + writefile.read()
        
        writefile.seek(0)
        writefile.write(out)
        writefile.truncate()