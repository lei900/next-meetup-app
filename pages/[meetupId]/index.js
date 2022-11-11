import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetailPage() {
  return (
    <MeetupDetail
      title="A First Meetup"
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      address="Some address 5, 1245 Some City"
      description="This is a first description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

// code execute when npm run build, not on server-side or client-side
export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A First Meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address: "Some address 5, 1245 Some City",
        description: "This is a first description",
      },
    },
    revalidate: 1,
  };
}
