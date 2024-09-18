import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://cdn.britannica.com/19/194819-050-BED53A4E/Maidan-Nezalezhnosti-Kiev-Ukraine.jpg"
      title="Meetup in Kyiv"
      address="Kyiv, 5 Independence square"
      description="This is the first meetup"
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

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://cdn.britannica.com/19/194819-050-BED53A4E/Maidan-Nezalezhnosti-Kiev-Ukraine.jpg",
        title: "Meetup in Kyiv",
        address: "Kyiv, 5 Independence square",
        description: "This is the first meetup",
      },
    },
  };
}

export default MeetupDetails;
