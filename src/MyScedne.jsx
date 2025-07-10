import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Myscene() {
  let mainColor = "darkgrey";
  let BaseColor = "#435363ff";
  function Kabina() {
    return (
      <>
        {/* //Podstawa */}
        <mesh position={[0.5, 4, 1]}>
          <boxGeometry args={[5, 6, 6]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={1}
            transparent={false}
          />
        </mesh>
      </>
    );
  }

  function PakaDol() {
    return (
      <>
        {/* //Podstawa */}
        <mesh position={[9, 1.5, 1]}>
          <boxGeometry args={[12, 1, 6]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={1}
            transparent={false}
          />
        </mesh>
      </>
    );
  }
  function SzybyPaka() {
    return (
      <>
        {/* //Podstawa */}
        <mesh position={[-0.6, 5, 1]}>
          <boxGeometry args={[1.5, 2.2, 6.2]} />
          <meshStandardMaterial
            color={"lightgrey"}
            opacity={0.5}
            transparent={false}
          />
        </mesh>
      </>
    );
  }

  function SzybyPakaFront() {
    return (
      <>
        {/* //Podstawa */}
        <mesh position={[-1.5, 5, 1]}>
          <boxGeometry args={[1.2, 2.2, 5.2]} />
          <meshStandardMaterial
            color={"lightgrey"}
            opacity={0.5}
            transparent={false}
          />
        </mesh>
      </>
    );
  }

  function CylinderPrism(x, y, z, a, b, c) {
    return (
      <mesh position={[a, b, c]} castShadow rotation={[Math.PI / 2, 0, 0]}>
        {/* radiusTop, radiusBottom, height, radialSegments */}
        <cylinderGeometry args={[x, y, z, 32]} />
        <meshStandardMaterial color="grey" />
      </mesh>
    );
  }

  function BurtaLewa() {
    return (
      <>
        {/* //Podstawa */}
        <mesh position={[9, 3, -1.9]}>
          <boxGeometry args={[12, 2, 0.2]} />
          <meshStandardMaterial
            color={"white"}
            opacity={1}
            transparent={true}
          />
        </mesh>
      </>
    );
  }

  function BurtaPrawa() {
    return (
      <>
        {/* //Podstawa */}
        <mesh position={[9, 3, 3.9]}>
          <boxGeometry args={[12, 2, 0.2]} />
          <meshStandardMaterial
            color={"white"}
            opacity={0.3}
            transparent={true}
          />
        </mesh>
      </>
    );
  }

  function BurtaTył() {
    return (
      <>
        {/* //Podstawa */}
        <mesh position={[14.9, 3, 1]}>
          <boxGeometry args={[0.2, 2, 5.6]} />
          <meshStandardMaterial
            color={"white"}
            opacity={0.8}
            transparent={true}
          />
        </mesh>
      </>
    );
  }

  function PodstawaHDS() {
    return (
      <>
        {/* //Podstawa */}
        <mesh position={[16.2, 2, 1]}>
          <boxGeometry args={[2, 2, 4.4]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={1}
            transparent={true}
          />
        </mesh>
      </>
    );
  }

  function KorpusHDS() {
    return (
      <>
        {/* //Podstawa */}
        <mesh position={[16.2, 4, 1]}>
          <boxGeometry args={[1, 6, 1]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={1}
            transparent={true}
          />
        </mesh>
      </>
    );
  }

  function Ramie1HDS() {
    return (
      <>
        {/* //Podstawa */}
        <mesh rotation={[0, 0, Math.PI / 4]} position={[14.9, 8, 1]}>
          <boxGeometry args={[1, 4, 1]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={1}
            transparent={true}
          />
        </mesh>
      </>
    );
  }
  function Ramie2HDS() {
    return (
      <>
        {/* //Podstawa */}
        <mesh rotation={[0, 0, Math.PI / 2]} position={[11.9, 9.3, 1]}>
          <boxGeometry args={[1, 4, 1]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={1}
            transparent={true}
          />
        </mesh>
      </>
    );
  }

  return (
    <>
      <Canvas // CANVAS komponent odpowiedzialny za 3D (dokąłdnie to WebGL opartego na Three.js)
        shadows // Uruchamia cienie w calej scenie
        camera={{ position: [28, 20, 20], fov: 50 }} // Ustawwia pozycja poczatkowa kamery
        style={{ width: "100%", height: "100vh", background: "#35495bff" }} // CANVAS ma szerokosc 100% oraz 100vh clej naszej strony WWW
      >
        {/* Światła */}
        <ambientLight intensity={0.5} />
        {/* Rodzaj oswietrlenia oraz jego intesywnosc*/}
        {/*  Siawtrlo keirunkowe, castShodw - mozliwsoc rzucania cienia, pozycja skad jest zreodlo sitala, wszystko co dotyczy Shadow-mapSize oraz Shadow-camera doptryczy jakosc cieni - narazie nie istione do projektu */}
        <directionalLight
          castShadow
          position={[9, 10, 4]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color={BaseColor} />
        </mesh> */}
        {/* <gridHelper args={[100, 100]} /> */}

        <OrbitControls />

        {/* Elementy Trucka */}
        {Kabina()}
        {CylinderPrism(1, 1, 7, 1, 1, 1)}
        {CylinderPrism(1, 1, 7, 10, 1, 1)}
        {CylinderPrism(1, 1, 7, 12.5, 1, 1)}
        {PakaDol()}
        {SzybyPaka()}
        {SzybyPakaFront()}
        {BurtaLewa()}
        {BurtaPrawa()}
        {BurtaTył()}
        {PodstawaHDS()}
        {KorpusHDS()}
        {Ramie1HDS()}
        {Ramie2HDS()}

        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </Canvas>
    </>
  );
}

export default Myscene;
