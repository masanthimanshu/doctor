import Link from "next/link";
import style from "./style.module.css";
import DoctorData from "../../../data/DoctorData.json";
import { DoctorSection, ImgComponent } from "../../../components";
import {
  Box,
  Grid,
  Button,
  Divider,
  Container,
  Typography,
} from "@mui/material";

function Home() {
  return (
    <>
      <Box sx={{ position: "fixed", right: "1rem", bottom: "1rem" }}>
        <Link href="#">
          <img src="/whatsapp.png" alt="Whatsapp" style={{ width: "4rem" }} />
        </Link>
      </Box>
      <section className={style.top_sec}>
        <Container>
          <Grid container spacing={5}>
            <Grid item md={6}>
              <Typography variant="h3">Expertise In Major</Typography>
              <br />
              <Typography variant="h2" color="secondary">
                <b>
                  DENTAL
                  <br />
                  PROCEDURES
                </b>
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                corrupti nam asperiores deleniti tempora facilis blanditiis
                eveniet in voluptates, repellat laudantium. Culpa, quod dolorem
                nihil sunt ad obcaecati vel fuga.
              </Typography>
              <br />
              <br />
              <Button variant="contained" color="secondary">
                <Typography color="white">
                  <b>Make An Appointment</b>
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={style.sec_two}>
        <Container>
          <Typography color="white">
            <b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              temporibus dolore id libero, ullam velit doloribus nam incidunt
              deserunt! Incidunt hic ullam quis mollitia consequatur deleniti,
              eligendi sequi. Ad, ratione. Impedit ab qui, ut doloremque, porro
              similique velit adipisci perspiciatis ad magnam voluptatum,
              mollitia vero quidem architecto laboriosam magni commodi.
            </b>
          </Typography>
        </Container>
      </section>
      <br />
      <br />
      <br />
      <Container id="about">
        <Typography variant="h4" textAlign="center">
          Our
          <b>
            <span style={{ marginLeft: "10px", color: "var(--theme-blue)" }}>
              PHYSIOTHERAPY EXPERTS
            </span>
          </b>
        </Typography>
        <br />
        <Typography textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          consectetur possimus maiores consequuntur vero voluptas aspernatur
          laborum, doloribus deleniti qui totam velit, dignissimos nulla?
          Voluptatibus cupiditate optio repudiandae ipsam ex!
        </Typography>
      </Container>
      <br />
      <br />
      <br />
      <DoctorSection
        orderImg={1}
        orderData={2}
        img="/nishant.png"
        edu={DoctorData.edu}
        name="Dr. Nishant Gemini"
        data={DoctorData.data}
      />
      <br />
      <br />
      <br />
      <DoctorSection
        orderImg={2}
        orderData={1}
        img="/pradeep.png"
        edu={DoctorData.edu}
        name="Dr. Pradeep Sharam"
        data={DoctorData.data}
      />
      <br />
      <br />
      <br />
      <section className={style.sec_three}>
        <Container id="services">
          <Typography variant="h4" textAlign="center">
            Our
            <b>
              <span style={{ marginLeft: "10px", color: "blue" }}>
                ORTHOPADIC EXPERTS
              </span>
            </b>
          </Typography>
          <br />
          <Typography textAlign="center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
            accusamus blanditiis iusto dolorum accusantium illum aspernatur
            rerum expedita aperiam, porro perferendis sint temporibus,
            voluptatum molestias dicta quas similique nulla nobis deserunt quis.
            Similique quo modi iure, qui assumenda quos minus provident
            aspernatur vel, perspiciatis expedita eum quasi in odio consectetur.
          </Typography>
        </Container>
        <br />
        <br />
        <br />
        <DoctorSection
          orderImg={1}
          orderData={2}
          img="/debashish.png"
          edu={DoctorData.edu}
          name="Dr. Debashish Chanda"
          data={DoctorData.data}
        />
        <br />
        <br />
        <br />
        <DoctorSection
          orderImg={2}
          orderData={1}
          img="/reeta.png"
          edu={DoctorData.edu}
          name="Dr. Reetadyuti Mukhopadhyay"
          data={DoctorData.data}
        />
      </section>
      <br />
      <br />
      <Container id="blog">
        <Typography variant="h4" textAlign="center">
          Our
          <b>
            <span style={{ marginLeft: "10px", color: "var(--theme-blue)" }}>
              APPROACH
            </span>
          </b>
        </Typography>
        <br />
        <Typography textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          officia distinctio, explicabo harum, fugiat facere minima at itaque
          voluptatum perferendis esse ex quos reiciendis a asperiores. Sed id
          optio aliquid, sit molestiae aspernatur deleniti iusto deserunt, amet
          iure quibusdam in quis veritatis. Odit deserunt quisquam similique nam
          cupiditate! Quisquam, ex.
        </Typography>
        <br />
        <br />
        <Grid container spacing={5}>
          <ImgComponent />
          <ImgComponent />
          <ImgComponent />
          <ImgComponent />
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <br />
      <Container id="portfolio">
        <Typography variant="h4" textAlign="center">
          We Can
          <b>
            <span style={{ marginLeft: "10px", color: "var(--theme-blue)" }}>
              Help You
            </span>
          </b>
        </Typography>
        <br />
        <Typography textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          debitis similique dicta fuga aliquid accusantium veritatis quibusdam,
          ipsum inventore autem vitae cum fugit, a nesciunt. Mollitia natus
          temporibus error quis, modi dicta ea, ad nisi aspernatur nesciunt
          itaque tempore amet iusto qui? Numquam odio tempora nihil ad natus
          voluptatem fugit!
        </Typography>
        <br />
        <br />
        <Grid container spacing={5}>
          <ImgComponent />
          <ImgComponent />
          <ImgComponent />
          <ImgComponent />
        </Grid>
      </Container>
      <br />
      <br />
    </>
  );
}

export default Home;
