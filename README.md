# Caesar-cipher

1. For using the prgramm clone repo, go to directory "caesar-cipher-cli" and istall all dependencies with command:

```bash
$ npm i
```

for code/decode text in file you can have files 'input.txt' and 'output.txt' in directory "caesar-cipher-cli"

so, cli take parameters:

1.  **-s, --shift**: a shift - required
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode - required

for encoding from file  in file:

**example:**

```bash
$ index -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ index --action encode --shift 7 --input input.txt --output output.txt
```

```bash
$ index --action decode --shift 7 --input input.txt --output output.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`


for encoding/decoding from console in file:

**example**

```bash
$ index --action code --shift 7 --output output.txt
This is secret. Message about "_" symbol!
```

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`


for encoding/decoding from file in console:

**example**

```bash
$ index --action encode --shift 7 --input input.txt
`Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
```

> iput.txt
> This is secret. Message about "_" symbol!


for instant encoding without files (throught console) do not use parameters input and output

**example**

```bash
$node index -s 7 --act encode
This is secret. Message about "_" symbol!
Vjku ku ugetgv. Oguucig cdqwv "_" uaodqn!
```
