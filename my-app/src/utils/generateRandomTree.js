import { ucFirst } from "./ucFirst";

export const generateRandomTree = (formId, ) => {

    let operatorsNumber = "is equal to|is less than|is greater than|is less than or equal to|is greater than or equal to|is at most|is under|is at least|is not equal to".split("|");

    let operatorsText = "was|is|is not|includes|does not include".split("|");

    let recipients = "Michael Christopher Matthew Joshua Jacob Nicholas Andrew Daniel Tyler Joseph Brandon David James Ryan John Zachary Justin William Anthony Robert Jessica Ashley Emily Sarah Samantha Amanda Brittany Elizabeth Taylor Megan Hannah Kayla Lauren Stephanie Rachel Jennifer Nicole Alexis Victoria Amber".split(" ");

    let counts = "amount sum difference total quantity".split(" ");

    let nouns = "account advertisement design agenda agreement arbitration notice bill letter file folder spreadsheet chart document memo graph".split(" ");

    let adjectives = "important confidential secret preliminary draft profitable urgent complicated new secondary tertiary final revised".split(" ");

    let roles = "manager worker client freelancer director secretary liason".split(" ");

    const randItem = (array) => array[Math.floor(Math.random() * array.length)];

    const makeTree = (path) => {

        let randomNumber = Math.floor(Math.random() * 20);

          // return an empty node or recipient
          if ((path.length > 1 && randomNumber < 4) || path.length > 2)
              {
                let isOne = Math.floor(Math.random() * 2);

                if (isOne)
                  { return { path: path }; }
                // return a recipient
                else
                    { return { path: path, to: randItem(recipients) }; }
              }

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
                        key = randItem(nouns);
                        op = randItem(operatorsText);
                        val = randItem(adjectives);
                    }
                else if (choice === 2)
                    {
                        key = randItem(counts);
                        op = randItem(operatorsNumber);
                        val = Math.floor(Math.random() * 20) * 5;
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
        name: ucFirst(randItem(adjectives)) + " " + ucFirst(randItem(nouns)) + " Route",
        data: makeTree("")
    }

    return tree;
}