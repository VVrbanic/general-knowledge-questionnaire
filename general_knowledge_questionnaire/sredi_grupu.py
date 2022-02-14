#{
     # "question":"1.Tko je 1889. u Saint-Remyju naslikao znamenitu 'Zvjezdanu noć'?",
     #"option1":"Vincent van Gogh",
     #"option2":"Andy Warhol",
     #"option3":"Vasilij Kadinski",
     #"option4":"Oskar Kokoschka"
     #},
n=0;   
with open ("grupaA.txt") as upitnik,open ("sredenoA.txt", "w") as sredeni_upitnik:
    lines=upitnik.readlines()
#read dodaje jedan prazan red pa ako ga zelimo maknuti dodamo .rstrip())
#print(pitanja.rstrip())
    for line in lines:
        if n==0:
            sredeni_upitnik.write('{\n"question":' + '"' + line.rstrip() +'",\n');
            n=n+1
        elif n==1:
            sredeni_upitnik.write('"option1":'+'"' + line.rstrip() + '",\n');
            n=n+1;
        elif n==2:
            sredeni_upitnik.write('"option2":'+'"' + line.rstrip() + '",\n');
            n=n+1;
        elif n==3:
            sredeni_upitnik.write('"option3":'+'"' + line.rstrip() + '",\n');
            n=n+1;
        elif n==4:
            sredeni_upitnik.write('"option4":'+'"' + line.rstrip() + '"\n},\n');
            n=0;
