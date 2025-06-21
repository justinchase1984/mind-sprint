import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const puzzles = [
  { id:1, question: "Which country hosted the 2020 Summer Olympics?", answer: "japan" },
  { id:2, question: "Unscramble: BMNAANA", answer: "banana" },
  { id:3, question: "What is the tallest mountain in the world?", answer: "everest" },
  { id:4, question: "Who won the FIFA World Cup in 2018?", answer: "france" },
  { id:5, question: "Which river runs through Paris?", answer: "seine" },
  { id:6, question: "What year did the Berlin Wall fall?", answer: "1989" },
  { id:7, question: "Emoji Puzzle: 🦁👑 (Answer is one word)", answer: "kinglion" },
  { id:8, question: "What is the capital city of Australia?", answer: "canberra" },
  { id:9, question: "Which movie won Best Picture at the 2020 Oscars?", answer: "parasite" },
  { id:10, question: "What is 9 x 7?", answer: "63" }
];

export default function PuzzlePage() {
  const router = useRouter();
  const { id } = router.query;
  const index = parseInt(id as string,10) - 1;
  const puzzle = puzzles[index];
  if (!puzzle) {
    return <main style={{textAlign:'center',padding:'2rem'}}><h2>🎉 All puzzles done! Come back tomorrow.</h2></main>;
  }
  return (
    <>
      <Head>
        <title>Puzzle {puzzle.id} | Mind Sprint</title>
        <meta name="description" content={puzzle.question} />
      </Head>
      <main style={{textAlign:'center',padding:'2rem'}}>
        <div id="ad-top">Ad Banner</div>
        <h2>Puzzle {puzzle.id}</h2>
        <p>{puzzle.question}</p>
        <form onSubmit={e=>{e.preventDefault();const ans=(e.target.elements.answer.value||"").trim().toLowerCase();if(ans===puzzle.answer){router.push(`/puzzle/${puzzle.id+1}`);}else{alert("Try again!");}}}>
          <input name="answer" required placeholder="Your answer..." style={{padding:'8px',fontSize:'16px'}}/>
          <button type="submit" style={{marginLeft:'10px',padding:'8px 16px'}}>Submit</button>
        </form>
        <div id="ad-bottom" style={{marginTop:'1rem'}}>Ad Banner</div>
      </main>
    </>
  );
}
