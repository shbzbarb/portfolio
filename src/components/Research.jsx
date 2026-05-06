import './Research.css'

export default function Research() {
  return (
    <section className="s" id="research">
      <div className="secH">
        <span className="num">§ 02</span>
        <h2>Research statement</h2>
        <span className="rule" />
        <span className="meta">cat ./research.md</span>
      </div>
      <div className="stmt rv">
        <p>I sit between three communities — <b>HCI</b>, <b>games research</b>, and <b>information visualization</b> — and the work happens in their overlap. My PhD focuses on data visualization <i>inside</i> computer games: diegetic HUDs, spatial telemetry, and the readability of complex game state under time pressure.</p>
        <p className="pull">[ Most game UI is designed by feel. <em>I want to give designers the same kind of evidence base that web typography has had for thirty years.</em> ]</p>
        <p>My methods are mixed: I build playable prototypes in [ENGINE], instrument them with [INSTRUMENTATION — eye-tracking, log analysis, etc.], and run controlled studies (typical n = [SAMPLE SIZE]) with post-hoc interviews. The findings turn into design heuristics I share at <b>[VENUE 1]</b>, <b>[VENUE 2]</b>, and <b>[VENUE 3]</b>, and into open-source tools other researchers can pick up.</p>
        <p>I care a lot about <b>ecological validity</b>. A study on a static screenshot tells you almost nothing about a player making a decision in 800ms with three other things on fire.</p>
      </div>

      <div className="interests rv">
        <div className="it">
          <div className="h">[FOCUS AREA 01]</div>
          <div className="n">[short description — perception, attention, decision-making, etc.]</div>
        </div>
        <div className="it">
          <div className="h">[FOCUS AREA 02]</div>
          <div className="n">[short description — diegetic UI, HUD design, accessibility, etc.]</div>
        </div>
        <div className="it">
          <div className="h">[FOCUS AREA 03]</div>
          <div className="n">[short description — in-game telemetry, spatial encodings, etc.]</div>
        </div>
        <div className="it">
          <div className="h">[FOCUS AREA 04]</div>
          <div className="n">[short description — methods, communities, etc.]</div>
        </div>
      </div>
    </section>
  )
}
