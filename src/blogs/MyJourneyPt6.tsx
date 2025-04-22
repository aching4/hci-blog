import account from "../assets/images/MyJourneyPt6/account.png";
import loading from "../assets/images/MyJourneyPt6/loading.png";
import Paragraph from "../components/elements/Paragraph";
import Title from "../components/elements/Title";

export default function MyJourneyPt6() {
  return (
    <>
      <Title>My Journey Pt. 6</Title>
      <div class="space-y-2 mt-4">
        <Paragraph
          img={{
            src: account,
            direction: "right",
          }}
        >
          I approached evaluating my medium-fidelity UI design by first looking
          at what they were and deciding which things were the most important
          thing to implement. The first thing that we thought about is making
          sure that everything is a consistent layout and everything being
          standard to give users control and freedom including buttons that can
          backtrack and retry. The other thing that needs to be is the
          visibility of system status. I think the most difficult part to be
          addressed is helping users recognize, diagnose, and recover from
          errors because you would need to step into the users shoes, but all
          designers have a harder time being able to find what could be pain
          points in their own designs. Usability flaws that we came up with for
          our medium-fidelity project was not having enough consistency in the
          button placement. We had our nav bar move from the right to the left
          on different pages which messes with consistency and the back buttons
          were both at the top and bottom of the page. The feedback for the
          heuristics evaluation made us realize how many things we still needed
          to add and improve on.
        </Paragraph>
        <Paragraph
          img={{
            src: loading,
            direction: "left",
          }}
        >
          There were a lot more changes with the UI design after the heuristic
          evaluation because we realized that while the color was nice, it was
          too distracting and we needed to make it have slightly less designs
          and colors. The changes will end up catching users' eyes but it will
          also not be as purple. It will still align with the goals that we have
          set for the user experience in my initial design but make it more
          readable and simpler for users. I ended up balancing aesthetic choices
          with ease of use by making sure the aesthetics were close to other
          websites but also stood out as a bit different. This helped with the
          usability of it too because we are able to use a lot of designs that
          end up being intuitive for users, making users have less questions for
          that particular section. Some things that we improved on for this
          prototype were in accordance with heuristic evaluation. One big thing
          that is not there in the medium-fidelity prototype is the visibility
          of the user system. While it makes sense to a user to see this, it
          didn't occur to us to include those things in our prototype since
          we've seen it too often and it is a bit of a small detail.
        </Paragraph>
        <Paragraph>
          I learned that designing for users is a lot harder than people think
          it is because a lot of the things I, as a user, won't notice but can
          be something that is very important to users. The evaluation forced me
          to reconsider the game area aspect of the prototype. I noticed that it
          didn't follow the standard of normal games, which may make our game
          more confusing. Some user flows were also re-considered and added
          onto. One of the biggest things I've noticed for UI/UX is that when
          you design something, the more invisible some of the parts are the
          better they are. Another thing that was unexpected was that people
          don't actually appreciate some of the finer details that you make.
          Instead, thye take things to the point and many shortcuts will be
          taken. Overall, I really didn't expect the role of UI/UX to have so
          many nuances to it. There was a lot more thought put into the design
          and experience of the user.
        </Paragraph>
        <Paragraph>
          I think I can apply the knowledge I gained by being more thoughtful of
          what users would feel rather than what I think people would like. I
          learned a lot about how designers often assume what users would like
          based on what they themselve like, instead of what other users might
          like, including features that don't do much but are cool. Users are a
          lot more outcome oriented, which designers will need to balance with
          their creative freedom. This changed my perspective on user testing
          because what designers think is good is not always what the users may
          like. And it is necessary to do many revisions to make it so users
          will like it. Now, I understand why the process is so long.
        </Paragraph>
      </div>
    </>
  );
}
