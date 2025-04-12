import frame from "../assets/images/MyJourneyPt5/frame.png";
import game from "../assets/images/MyJourneyPt5/game.png";
import page from "../assets/images/MyJourneyPt5/page.png";
import Paragraph from "../components/elements/Paragraph";
import Title from "../components/elements/Title";

export default function MyJourneyPt5() {
  return (
    <>
      <Title>My Journey Pt. 5</Title>
      <div class="space-y-2 mt-4">
        <Paragraph
          img={{
            src: frame,
            direction: "right",
          }}
        >
          I approached UI designing by starting with a quick sketch of how it
          could look, basic layouts (normally ones that are popular or ones that
          I personally like), and general color scheme. Most of this does end up
          changing later on as I keep working on it, but the initial thoughts
          help me figure out something I like and change it depending on what is
          wanted or needed later. At first, it was both exciting and
          intimidating. I was very excited to be able to imagine how to make
          this application a reality, but I was also intimidated by all the
          designing that goes on within making this application. The one thing
          that stands out to me in UI design principles is consistency within
          the whole site. I've noticed other sites where some pages don't match
          previously and it makes the whole site seem unprofessional and harder
          to continue to look through. It made me unsure if each page was the
          right next page. I want to avoid this issue, which is why I want to
          focus a lot of my time on making all components consistent. None of
          the principles changed the way I previously thought about design since
          most of them are pretty straightfoward and makes designers place
          themselves in user's shoes. UI design is pretty fun as a whole.
        </Paragraph>
        <Paragraph
          img={{
            src: page,
            direction: "left",
          }}
        >
          We ended up using Figma for our medium fidelity prototyping. We
          decided to use purple with white words because it is not usually used
          for website and since this was for students still, we wanted a splash
          of color on the page. It also helps all the other words and buttons
          stand out when we use other colors. Overall, we used what we see the
          most in other websites to create our designs. Using what others are
          familiar with helps avoid confusion as well as give users a sense of
          familiarity. Our wireframe started from just lo-fidelity prototype.
          From there, we added colors and confirmed different ways to go through
          the application.
        </Paragraph>
        <Paragraph
          img={{
            src: game,
            direction: "left",
          }}
        >
          One of the main challenges I faced was figuring what color we wanted
          the background to be. There were many different colors that we could
          have used to give different feels to the page. At first, I thought
          about just going with a full white background and colored text. But,
          after thinking about it, I realized thats similar to other pages. To
          stand apart, we needed to make the page a color that isn't used often.
          Even though we wanted it unique, we also prioritized comfortablilty of
          the eyes and what would have the best feel for users. We are still a
          bit indecisive on how the game parts should look, mostly because we
          want to balance our design with how normal games would look. None of
          the feedback changed the design drastically. Some feedback given were
          incorporated, but most were small things. I think for us, the biggest
          breakthrough might have been the color. Since the design layout has
          been similar to previous iterations.
        </Paragraph>
        <Paragraph>
          This stage has made me think a lot more of what it takes for an
          application to be considered having good user experience and design.
          I've noticed that the experience and understanding can be quite
          different for those making it and for people who are using it because
          sometimes I see something as a designer and think of it as something
          that is quite obvious, but when I show others, they point out things
          that can be a bit unclear. I think now I have started to appreciate
          more the intuitive designing that needs to encompass everyone rather
          than just someone who already understands what it should be doing. If
          I could go back, I would tell myself to get less hung up on the small
          details and plan out the bigger things first. I think I was so focused
          on the smallest part of the design that I ended up not looking as much
          on the other things and potentially forgetting.
        </Paragraph>
      </div>
    </>
  );
}
