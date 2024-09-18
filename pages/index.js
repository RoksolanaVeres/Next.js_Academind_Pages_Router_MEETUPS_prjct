import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://worldwildschooling.com/wp-content/uploads/2024/01/Small-Towns-in-Europe_Assos_Greece_SCStock_Adobe-Stock-Photo_427227583-1.jpg",
    address: "6 Lionnel str., Greece",
    description: "this is the first meetup",
  },
  {
    id: "m2",
    title: "second meetup",
    image:
      "https://cdn.britannica.com/19/194819-050-BED53A4E/Maidan-Nezalezhnosti-Kiev-Ukraine.jpg",
    address: "6 Kyiv str., Ukraine",
    description: "this is the second meetup",
  },
  {
    id: "m3",
    title: "third meetup",
    image:
      "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
    address: "4 Paris str., France",
    description: "this is the third meetup",
  },
  {
    id: "m4",
    title: "fourth meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/London_Big_Ben_Phone_box.jpg/800px-London_Big_Ben_Phone_box.jpg",
    address: "10 London str., England",
    description: "this is the fourth meetup",
  },
  {
    id: "m5",
    title: "fifth meetup",
    image:
      "https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp",
    address: "6 Rome str., Italy",
    description: "this is the fifth meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
