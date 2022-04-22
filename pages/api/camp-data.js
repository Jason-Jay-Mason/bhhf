import axios from "axios";

const getCampData = async () => {
  try {
    //data is fetched from omnify endpoint that is not in public api docs
    const baseUrl = "https://app.getomnify.com/v1/businesses/22949/home.json?timezone=America%2FDenver&widget_key=";
    const data = await axios.get(baseUrl);
    if (data) {
      //make the returned data more useful for the front end
      const newArr = data.data.data.events.map((event) => {
        return {
          id: event.id,
          title: event.name,
          date: event.startdate,
          endDate: event.enddate,
          ctaHref: `https://brokenhearthorsefarm.getomnify.com/checkout/${event.id}/?type=event&timezone=America%2FDenver&widget_key=`,
          toggleDates: true,
          toggleEndDates: true,
          ctaLabel: "Book Now",
        };
      });

      return newArr;
    }
    //return null if data doesn't exist
    return null;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const handler = async (req, res) => {
  const data = await getCampData();
  res.setHeader("Cache-Control", "s-maxage=3600");
  res.status(200).json({ camps: data });
};

export default handler;
