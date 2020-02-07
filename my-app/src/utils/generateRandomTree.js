export const generateRandomTree = (formId, ) => {

    let operatorsNumber = "is equal to|is less than|is greater than|is less than or equal to|is greater than or equal to|is at most|is under|is at least|is not equal to".split("|");

    let operatorsText = "is equal to|contains|is not equal to|includes|does not contain|does not include".split("|");

    let recipients = "Michael Christopher Matthew Joshua Jacob Nicholas Andrew Daniel Tyler Joseph Brandon David James Ryan John Zachary Justin William Anthony Robert Jessica Ashley Emily Sarah Samantha Amanda Brittany Elizabeth Taylor Megan Hannah Kayla Lauren Stephanie Rachel Jennifer Nicole Alexis Victoria Amber".split(" ");

    let counts = "amount sum difference total quantity";

    let nouns = "account advertisement design agenda agreement arbitration notice bill letter file folder spreadsheet chart document memo graph".split(" ");

    let adjectives = "important confidential secret preliminary draft profitable urgent complicated new secondary tertiary final revised".split(" ");

    let roles = "manager worker client freelancer director secretary liason".split(" ");

    const randItem = (array) => array[Math.floor(Math.random() * array.length)];

    const makeTree = (path) => {

        let randomNumber = Math.floor(Math.random() * 20);

          // return an empty node
          if (randomNumber < 2 || path.length > 3)
              { return { path: path }; }

          // return a recipient
          else if (randomNumber < 4)
              { return { path: path, to: randItem(recipients) }; }

        // return a rule and its children
        else
            {
                // choose a pair of words to use for the rule
                // start with (role) (op) (recipient)
                let key = randItem(roles);
                let op = randItem(operatorsText);
                let val = randItem(recipients);

                let choice = Math.floor(Math.random() * 4);

                if (choice === 1)
                    {
                        let key = randItem(nouns);
                        let op = randItem(operatorsText);
                        let val = randItem(adjectives);
                    }
                else if (choice === 2)
                    {
                        let key = randItem(counts);
                        let op = randItem(operatorsNumber);
                        let val = randItem(Math.floor(Math.random() * 20) * 5);
                    }

                return {    
                    path: path,
                    rule: {key: key, op: op, val: val},
                    0: makeTree(path + "0"),
                    1: makeTree(path + "1")
                };
            }
    }

    
    let tree = {
        formId: Date.now(),
        name: randItem(adjectives) + " " + randItem(nouns) + " route",
        data: makeTree("")
    }

    return tree;
}