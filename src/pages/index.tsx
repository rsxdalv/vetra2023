// import Map from "@components/Map";
import { css } from "@emotion/css";
import Map from "../components/Map";
import data from "../../build/disconnects.json";
import proj4 from "proj4";
import { Tweet, TweetMediaVideo } from "react-tweet";

const DEFAULT_CENTER = [56.62453288440317, 23.28223156339783];
proj4.defs(
  "EPSG:3059",
  "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=-6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"
);
proj4.defs(
  "EPSG:3857",
  "+proj=merc +a=6378137 +b=6378137 +lat_ts=0 +lon_0=0 +x_0=0 +y_0=0 +k=1 +units=m +nadgrids=@null +wktext +no_defs +type=crs"
);

const disconnects = data.disconnects.map((x) => {
  x.lat = parseFloat(x.lat as string);
  x.lng = parseFloat(x.lng as string);
  const [lng, lat] = proj4("EPSG:3059", "WGS84", [x.lat, x.lng]);
  return {
    ...x,
    lat,
    lng,
  };
}) as Disconnect[];

interface RootObject {
  lat_pos?: any;
  lng_pos?: any;
  disconnects: Disconnect[];
}

interface Disconnect {
  lat: number | string;
  lng: number | string;
  type: "crash" | "planned";
  clients_all: string;
  clients_planned: string;
  clients_unplanned: string;
  clients: string;
  nr: number;
  outage_id: number;
  nr_text: string;
  time: string;
  status: string;
}

const tweets = [
  {
    url: "https://twitter.com/boms_tricis/status/1688576718632591360",
    id: "1688576718632591360",
    type: "photo",
    position: [57.17316656935, 26.752109695024952],
  },
  {
    url: "https://twitter.com/Centinela_35/status/1688947067748577282",
    id: "1688947067748577282",
    type: "video",
    position: [56.40017552492367, 23.251678583070632],
  },
  {
    url: "https://twitter.com/Negaiss/status/1688833442916532224",
    id: "1688833442916532224",
    type: "information",
    position: [57.666429385776276, 22.269338002512246],
  },
  {
    url: "https://twitter.com/lillais/status/1688731758873772032",
    id: "1688731758873772032",
    type: "photo",
    position: [56.39413141385978, 23.250411811097297],
  },
  {
    url: "https://twitter.com/lillais/status/1688743379134226432?s=20",
    id: "1688743379134226432",
    type: "photo",
    position: [56.397551641759286, 23.23933965219933],
  },
  {
    url: "https://twitter.com/boms_tricis/status/1688585050059673601?s=20",
    id: "1688585050059673601",
    type: "video",
    position: [56.848656312874624, 24.230876859002503],
  },
  {
    url: "https://twitter.com/VKleinbergs/status/1688555346065866752?s=20",
    id: "1688555346065866752",
    type: "video",
    position: [56.923827135267125, 24.137013579295328],
  },
  {
    url: "https://twitter.com/boms_tricis/status/1688563214408204290?s=20",
    id: "1688563214408204290",
    type: "photo",
    position: [56.85385511285543, 26.21714970292741],
  },
  {
    url: "https://twitter.com/ltvzinas/status/1688509350363398144?s=20",
    id: "1688509350363398144",
    type: "video",
    position: [56.93385006287448, 24.11993327219352],
  },
  {
    url: "https://twitter.com/kairokiitsak/status/1688509556811280384?s=20",
    id: "1688509556811280384",
    type: "photo",
    position: [58.0083378308824, 22.049069098758956],
  },
  {
    url: "https://twitter.com/kairokiitsak/status/1688929448945401856?s=20",
    id: "1688929448945401856",
    type: "photo",
    position: [57.999537223571494, 22.078019127027435],
  },
  {
    url: "https://twitter.com/kairokiitsak/status/1688914824238075905?s=20",
    id: "1688914824238075905",
    type: "photo",
    position: [58.907593104571625, 24.70740578133296],
  },
  {
    url: "https://twitter.com/kairokiitsak/status/1688935487178686466?s=20",
    id: "1688935487178686466",
    type: "information",
    position: [59.35861054291852, 24.049625292601103],
  },
  {
    url: "https://twitter.com/kairokiitsak/status/1688507811523633152",
    id: "1688507811523633152",
    type: "video",
    position: [58.00629149901638, 22.060656241791712],
  },
  // https://twitter.com/janis_enins/status/1688497061610524675?s=20 video 56.648365912103124, 23.71213990197034
  {
    url: "https://twitter.com/janis_enins/status/1688497061610524675?s=20",
    id: "1688497061610524675",
    type: "video",
    position: [56.648365912103124, 23.71213990197034],
  },
  // https://twitter.com/Radovics/status/1688478389227626497?s=20 v 56.438488409781115, 23.34589973186985
  {
    url: "https://twitter.com/Radovics/status/1688478389227626497?s=20",
    id: "1688478389227626497",
    type: "video",
    position: [56.438488409781115, 23.34589973186985],
  },
  // https://twitter.com/AinisRoga/status/1688490714181607425 p 56.534609674343145, 23.24049262653146
  {
    url: "https://twitter.com/AinisRoga/status/1688490714181607425",
    id: "1688490714181607425",
    type: "photo",
    position: [56.534609674343145, 23.24049262653146],
  },
  // https://twitter.com/LVGMC_Meteo/status/1688491275106779141 p 56.531473939459055, 23.23431281691399
  {
    url: "https://twitter.com/LVGMC_Meteo/status/1688491275106779141",
    id: "1688491275106779141",
    type: "photo",
    position: [56.531473939459055, 23.23431281691399],
  },
  // https://twitter.com/boms_tricis/status/1688490751091458048 p 57.22546410978519, 22.754901133001574
  {
    url: "https://twitter.com/boms_tricis/status/1688490751091458048",
    id: "1688490751091458048",
    type: "photo",
    position: [57.22546410978519, 22.754901133001574],
  },
  // https://twitter.com/boms_tricis/status/1688484253078536193?s=20 v 56.48592577507669, 23.36718025005314
  {
    url: "https://twitter.com/boms_tricis/status/1688484253078536193?s=20",
    id: "1688484253078536193",
    type: "video",
    position: [56.48592577507669, 23.36718025005314],
  },
  // https://twitter.com/Balitis/status/1688489791761924096?s=20 v 56.66400381004042, 23.037500840466745
  {
    url: "https://twitter.com/Balitis/status/1688489791761924096?s=20",
    id: "1688489791761924096",
    type: "video",
    position: [56.66400381004042, 23.037500840466745],
  },
  // https://twitter.com/boms_tricis/status/1688488872894705664?s=20 v 56.51316457444997, 23.3377837668574
  {
    url: "https://twitter.com/boms_tricis/status/1688488872894705664?s=20",
    id: "1688488872894705664",
    type: "video",
    position: [56.51316457444997, 23.3377837668574],
  },
  // https://twitter.com/latviete2221/status/1688515508558004224?s=20 v 56.44926937842296, 23.354060192683587
  {
    url: "https://twitter.com/boms_tricis/status/1688488872894705664",
    id: "1688488872894705664",
    type: "video",
    position: [56.44926937842296, 23.354060192683587],
  },
  // https://twitter.com/latviete2221/status/1688519034491330560?s=20 p 56.4487475735177, 23.35131361063138
  {
    url: "https://twitter.com/latviete2221/status/1688519034491330560?s=20",
    id: "1688519034491330560",
    type: "photo",
    position: [56.4487475735177, 23.35131361063138],
  },
  // https://twitter.com/latviete2221/status/1688541685255380993?s=20 v 56.4487475735177, 23.35131361063138
  {
    url: "https://twitter.com/latviete2221/status/1688541685255380993?s=20",
    id: "1688541685255380993",
    type: "video",
    position: [56.4487475735177, 23.35131361063138],
  },
  // https://twitter.com/latviete2221/status/1688524361718759424?s=20 p 56.44986232984432, 23.349468250815047
  {
    url: "https://twitter.com/latviete2221/status/1688524361718759424?s=20",
    id: "1688524361718759424",
    type: "photo",
    position: [56.44986232984432, 23.349468250815047],
  },
  // https://twitter.com/breakinglv/status/1688854196705968128 v 56.515519601056454, 23.323931725932283
  {
    url: "https://twitter.com/breakinglv/status/1688854196705968128",
    id: "1688854196705968128",
    type: "video",
    position: [56.515519601056454, 23.323931725932283],
  },
  // https://twitter.com/EdgarsFoto/status/1688489634978811904 p 56.673097842758004, 23.089254034113555
  {
    url: "https://twitter.com/EdgarsFoto/status/1688489634978811904",
    id: "1688489634978811904",
    type: "photo",
    position: [56.673097842758004, 23.089254034113555],
  },
  // https://twitter.com/EdgarsFoto/status/1688492270184476672 v 56.672473011519834, 23.08880342299561
  {
    url: "https://twitter.com/EdgarsFoto/status/1688492270184476672",
    id: "1688492270184476672",
    type: "video",
    position: [56.672473011519834, 23.08880342299561],
  },
  // https://twitter.com/EdgarsFoto/status/1688495254628896768 p 56.672661640910114, 23.088696134634198
  {
    url: "https://twitter.com/EdgarsFoto/status/1688495254628896768",
    id: "1688495254628896768",
    type: "photo",
    position: [56.672661640910114, 23.088696134634198],
  },
  // https://twitter.com/breakinglv/status/1688491594859659264 p 56.47938529341555, 23.391813657833893
  {
    url: "https://twitter.com/breakinglv/status/1688491594859659264",
    id: "1688491594859659264",
    type: "photo",
    position: [56.47938529341555, 23.391813657833893],
  },
  // https://twitter.com/breakinglv/status/1688490867072335872 p 56.48099682108751, 23.38357391167727
  {
    url: "https://twitter.com/breakinglv/status/1688490867072335872",
    id: "1688490867072335872",
    type: "photo",
    position: [56.48099682108751, 23.38357391167727],
  },
  // https://twitter.com/breakinglv/status/1688498398201049094 v 56.648666118343456, 23.723206178236865
  {
    url: "https://twitter.com/breakinglv/status/1688498398201049094",
    id: "1688498398201049094",
    type: "video",
    position: [56.648666118343456, 23.723206178236865],
  },
  // https://twitter.com/Negaiss/status/1688520597590994944 p 56.90543355152058, 24.929292111828005
  {
    url: "https://twitter.com/Negaiss/status/1688520597590994944",
    id: "1688520597590994944",
    type: "photo",
    position: [56.90543355152058, 24.929292111828005],
  },
  // https://twitter.com/martagrigale/status/1688516493636460547 v 56.95806463175226, 24.131128327210867
  {
    url: "https://twitter.com/martagrigale/status/1688516493636460547",
    id: "1688516493636460547",
    type: "video",
    position: [56.95806463175226, 24.131128327210867],
  },
  // https://twitter.com/Negaiss/status/1688504151418789888 p 56.51007817568895, 24.725841718759533
  {
    url: "https://twitter.com/Negaiss/status/1688504151418789888",
    id: "1688504151418789888",
    type: "photo",
    position: [56.51007817568895, 24.725841718759533],
  },
  // https://twitter.com/Gints_photo/status/1688532051744395264 p 56.73159586963907, 23.012170983130172
  {
    url: "https://twitter.com/Gints_photo/status/1688532051744395264",
    id: "1688532051744395264",
    type: "photo",
    position: [56.73159586963907, 23.012170983130172],
  },
  // https://twitter.com/breakinglv/status/1688534421832364034 v 55.88439181016256, 26.52884481821394
  {
    url: "https://twitter.com/breakinglv/status/1688534421832364034",
    id: "1688534421832364034",
    type: "video",
    position: [55.88439181016256, 26.52884481821394],
  },
  // https://twitter.com/breakinglv/status/1688544889842122753 p 56.41849640797561, 23.54747146538992
  {
    url: "https://twitter.com/breakinglv/status/1688544889842122753",
    id: "1688544889842122753",
    type: "photo",
    position: [56.41849640797561, 23.54747146538992],
  },
  // https://twitter.com/JanisVingris/status/1688552431527792641 v 56.62349408613722, 23.275880068126867
  {
    url: "https://twitter.com/JanisVingris/status/1688552431527792641",
    id: "1688552431527792641",
    type: "video",
    position: [56.62349408613722, 23.275880068126867],
  },
  // https://twitter.com/JanisVingris/status/1688562752648880129 v 56.479890518839355, 23.38550972580301
  {
    url: "https://twitter.com/JanisVingris/status/1688562752648880129",
    id: "1688562752648880129",
    type: "video",
    position: [56.479890518839355, 23.38550972580301],
  },
  // https://twitter.com/breakinglv/status/1688582132828921856 p 56.51385124015239, 23.33374972446822
  {
    url: "https://twitter.com/breakinglv/status/1688582132828921856",
    id: "1688582132828921856",
    type: "photo",
    position: [56.51385124015239, 23.33374972446822],
  },
  // https://twitter.com/LinardsWeather/status/1688621224245522432 p 57.89352934313081, 25.34576546129994
  {
    url: "https://twitter.com/LinardsWeather/status/1688621224245522432",
    id: "1688621224245522432",
    type: "photo",
    position: [57.89352934313081, 25.34576546129994],
  },
  // https://twitter.com/Valters_Bruss/status/1688631615281369089 p 56.49736506293031, 23.304549910989955
  {
    url: "https://twitter.com/Valters_Bruss/status/1688631615281369089",
    id: "1688631615281369089",
    type: "photo",
    position: [56.49736506293031, 23.304549910989955],
  },
  // https://twitter.com/Gints_photo/status/1688647826379509760 v 56.73107794824924, 23.015518380006302
  {
    url: "https://twitter.com/Gints_photo/status/1688647826379509760",
    id: "1688647826379509760",
    type: "video",
    position: [56.73107794824924, 23.015518380006302],
  },
  
];

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Map
        width="800"
        height="400"
        center={DEFAULT_CENTER}
        zoom={8}
        className={css`
          width: 100%;
          height: 100%;
        `}
      >
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* <Marker position={DEFAULT_CENTER}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker> */}
            {/* {item.name} <br /> {item.address} */}
            {/* {disconnects
              .filter((item) => item.type === "crash")
              // .filter((item, index) => index < 100)
              .map((item) => (
                <Marker position={[item.lat, item.lng]} key={item.nr}>
                  <Popup>
                    {item.clients}
                  </Popup>
                </Marker>
              ))} */}
            {tweets.map((id) => (
              <Marker position={id.position}>
                <Popup>
                  <Tweet id={id.id} />
                </Popup>
              </Marker>
            ))}
            <Marker position={[56.40017552492367, 23.251678583070632]}>
              <Popup>
                {/* https://twitter.com/Centinela_35/status/1688947067748577282?s=20 */}
                {/* https://twitter.com/i/status/1688947067748577282 */}
                <Tweet id="1688947067748577282" />
                {/* <TweetMediaVideo tweet={{ id: "1688947067748577282" }} /> */}
              </Popup>
            </Marker>
          </>
        )}
      </Map>
    </div>
  );
}
