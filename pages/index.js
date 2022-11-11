import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 1245 Some City",
    description: "This is a first description",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 1245 Some City",
    description: "This is a second description",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// code execute when npm run build, not on server-side or client-side
export async function getStaticProps() {
  // fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

// Never use SSG, unless content changes multiple times every second
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API
//   // code only run on the server
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
