import Image from "next/image";

export function HelicopterScene() {
  return <div className="heli-stage" aria-hidden="true">
    <Image src="/images/hero-city-clean.jpg" alt="" width={1170} height={655} priority quality={90} sizes="100vw" className="heli-plate"/>
    <div className="heli-flyer">
      <div className="heli">
        <Image src="/images/helicopter.png" alt="" width={496} height={262} sizes="30vw" className="heli-body"/>
        <span className="heli-rotor"><span className="heli-rotor-spin"/></span>
        <span className="heli-light heli-light-red"/>
        <span className="heli-light heli-light-fin"/>
        <span className="heli-light heli-light-white"/>
      </div>
    </div>
  </div>;
}
