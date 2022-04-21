import axios from "axios";

const getCampData = async () => {
  try {
    //data is fetched from omnify endpoint that is not in public api docs
    const baseUrl = "https://app.getomnify.com/v1/businesses/22949/home.json?timezone=America%2FDenver&widget_key=";
    const data = await axios.get(baseUrl);
    if (data) {
      const fetched = data.data.data.events || [];
      //make the returned data more useful for the front end
      const newArr = fetched.map((event) => {
        return {
          id: event.id,
          title: event.name,
          date: event.startdate,
          //add the start data as an int for easy sorting
          dateNum: parseInt(event.startdate.replaceAll("-", "")),
          endDate: event.enddate,
          ctaHref: `https://brokenhearthorsefarm.getomnify.com/checkout/${event.id}/?type=event&timezone=America%2FDenver&widget_key=`,
          toggleDates: true,
          toggleEndDates: true,
          ctaLabel: "Book Now",
        };
      });

      //make the final array ordered by start date (without deleting camps on the same date)
      let ordered = {};
      let final = [];
      for (let i = 0; i < newArr.length; i++) {
        if (ordered[newArr[i].dateNum]) {
          if (ordered[newArr[i].dateNum].length) {
            ordered[newArr[i].dateNum] = [...ordered[newArr[i].dateNum], newArr[i]];
          }
          ordered[newArr[i].dateNum] = [ordered[newArr[i].dateNum], newArr[i]];
        } else {
          ordered[newArr[i].dateNum] = newArr[i];
        }
      }
      let keys = Object.keys(ordered);
      for (let j = 0; j < keys.length; j++) {
        if (ordered[keys[j]].length) {
          ordered[keys[j]].forEach((element) => {
            final.push(element);
          });
        } else {
          final.push(ordered[keys[j]]);
        }
      }

      return final;
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
