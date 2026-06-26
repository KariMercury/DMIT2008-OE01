const SIMPSON_CHARACTERS = [
	"Homer Simpson",
	"Bart Simpson",
	"Marge Simpson",
	"Mr. Burns",
	"Lisa Simpson",
	"Apu Nahasapeemapetilon",
	"Sideshow Bob",
	"Milhouse Van Houten",
	"Ned Flanders",
]

export default function SimpsonCharacters() { //

    return (
        <ul>
            {SIMPSON_CHARACTERS.map( // i take a series of items and i appl a function to all of them 
            // / filter = search all the arrays and tak out the ones matching specs
                (name)  => {
                    return <li key={index}>{name}</li>
                    }
                )
            }
        </ul>
    )
}