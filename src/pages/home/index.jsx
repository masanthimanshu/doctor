import style from "./style.module.css";
import { DoctorSection } from "../../../components";
import { Container, Typography, Grid, Button } from "@mui/material";

function Home() {
  return (
    <>
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
      <Container>
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
        img="/doctor.png"
        name="Dr. Nishant Gemini"
        edu="BPT, M.P.T. (Sports), MIAP, M.D(AM), IASTM, KTT"
        data={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iusto 
              voluptates a commodi? Minus obcaecati sed sint non explicabo veniam 
              assumenda beatae optio quae omnis, necessitatibus itaque nobis vitae 
              totam, nemo tenetur odit repellat animi provident? Dolor fugit libero 
              deleniti nemo molestiae inventore deserunt accusantium, repellat 
              perferendis rerum obcaecati aperiam suscipit laboriosam alias. Ipsam 
              excepturi harum, ab tempora voluptatum quia explicabo, libero magni 
              laboriosam quasi enim soluta odio amet dignissimos sit cum nesciunt 
              exercitationem molestias! Dicta, a suscipit consequuntur libero 
              nesciunt nulla ipsa debitis reprehenderit repellendus rerum hic ipsum 
              dolores ducimus sed labore corrupti voluptatem ut eos! Officia, maxime
              molestias?`}
        orderImg={1}
        orderData={2}
      />
      <br />
      <br />
      <br />
      <DoctorSection
        img="/doctor.png"
        name="Dr. Nishant Gemini"
        edu="BPT, M.P.T. (Sports), MIAP, M.D(AM), IASTM, KTT"
        data={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iusto 
              voluptates a commodi? Minus obcaecati sed sint non explicabo veniam 
              assumenda beatae optio quae omnis, necessitatibus itaque nobis vitae 
              totam, nemo tenetur odit repellat animi provident? Dolor fugit libero 
              deleniti nemo molestiae inventore deserunt accusantium, repellat 
              perferendis rerum obcaecati aperiam suscipit laboriosam alias. Ipsam 
              excepturi harum, ab tempora voluptatum quia explicabo, libero magni 
              laboriosam quasi enim soluta odio amet dignissimos sit cum nesciunt 
              exercitationem molestias! Dicta, a suscipit consequuntur libero 
              nesciunt nulla ipsa debitis reprehenderit repellendus rerum hic ipsum 
              dolores ducimus sed labore corrupti voluptatem ut eos! Officia, maxime
              molestias?`}
        orderImg={2}
        orderData={1}
      />
      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
