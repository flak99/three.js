import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Trailer() {
  let mainColor = "darkgrey";
  let BaseColor = "#435363ff";

  function TrailerAll() {
    return (
      <group>
        <mesh position={[-4.5, 2.3, 1]}>
          <boxGeometry args={[30, 0.5, 9.5]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={1}
            transparent={false}
          />
        </mesh>
        <mesh position={[-7.5, 1.3, 4]}>
          <boxGeometry args={[10, 1.5, 3.5]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={0.7}
            transparent={true}
          />
        </mesh>
        <mesh position={[-7.5, 1.3, -2]}>
          <boxGeometry args={[10, 1.5, 3.5]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={0.7}
            transparent={true}
          />
        </mesh>
        <mesh position={[9.3, 1.6, 1]}>
          <boxGeometry args={[0.3, 1, 9.4]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={1}
            transparent={true}
          />
        </mesh>
        <mesh position={[-19.3, 6.6, 1]}>
          <boxGeometry args={[0.3, 9, 9.4]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={1}
            transparent={true}
          />
        </mesh>
        <mesh position={[-4.4, 6.6, -3.6]}>
          <boxGeometry args={[29.7, 9, 0.3]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={1}
            transparent={true}
          />
        </mesh>
        <mesh position={[-4.4, 6.6, 5.6]}>
          <boxGeometry args={[29.7, 9, 0.3]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={0.4}
            transparent={true}
          />
        </mesh>
        <mesh position={[10.3, 6.6, 1]}>
          <boxGeometry args={[0.3, 9, 9.4]} />
          <meshStandardMaterial
            color={mainColor}
            opacity={0.4}
            transparent={true}
          />
        </mesh>
      </group>
    );
  }

  // function PodłogaPaki() {
  //   return (
  //     <>
  //       {/* //Podstawa */}
  //       <mesh position={[-4.5, 2.3, 1]}>
  //         <boxGeometry args={[30, 0.5, 9.5]} />
  //         <meshStandardMaterial
  //           color={mainColor}
  //           opacity={1}
  //           transparent={false}
  //         />
  //       </mesh>
  //     </>
  //   );
  // }

  // function elementyDekoracyjne() {
  //   return (
  //     <mesh position={[-7.5, 1.3, 4]}>
  //       <boxGeometry args={[10, 1.5, 3.5]} />
  //       <meshStandardMaterial
  //         color={mainColor}
  //         opacity={0.7}
  //         transparent={true}
  //       />
  //     </mesh>
  //   );
  // }
  // function elementyDekoracyjne2() {
  //   return (
  //     <mesh position={[-7.5, 1.3, -2]}>
  //       <boxGeometry args={[10, 1.5, 3.5]} />
  //       <meshStandardMaterial
  //         color={mainColor}
  //         opacity={0.7}
  //         transparent={true}
  //       />
  //     </mesh>
  //   );
  // }

  // function BelkaTył() {
  //   return (
  //     <mesh position={[9.3, 1.6, 1]}>
  //       <boxGeometry args={[0.3, 1, 9.4]} />
  //       <meshStandardMaterial
  //         color={mainColor}
  //         opacity={1}
  //         transparent={true}
  //       />
  //     </mesh>
  //   );
  // }

  // function ScianaFront() {
  //   return (
  //     <mesh position={[-19.3, 6.6, 1]}>
  //       <boxGeometry args={[0.3, 9, 9.4]} />
  //       <meshStandardMaterial
  //         color={mainColor}
  //         opacity={1}
  //         transparent={true}
  //       />
  //     </mesh>
  //   );
  // }

  // function ScianaLewa() {
  //   return (
  //     <mesh position={[-4.4, 6.6, -3.6]}>
  //       <boxGeometry args={[29.7, 9, 0.3]} />
  //       <meshStandardMaterial
  //         color={mainColor}
  //         opacity={1}
  //         transparent={true}
  //       />
  //     </mesh>
  //   );
  // }

  // function ScianaPrawa() {
  //   return (
  //     <mesh position={[-4.4, 6.6, 5.6]}>
  //       <boxGeometry args={[29.7, 9, 0.3]} />
  //       <meshStandardMaterial
  //         color={mainColor}
  //         opacity={0.4}
  //         transparent={true}
  //       />
  //     </mesh>
  //   );
  // }

  // function ScianaTył() {
  //   return (
  //     <mesh position={[10.3, 6.6, 1]}>
  //       <boxGeometry args={[0.3, 9, 9.4]} />
  //       <meshStandardMaterial
  //         color={mainColor}
  //         opacity={0.4}
  //         transparent={true}
  //       />
  //     </mesh>
  //   );
  // }

  function CylinderPrism(x, y, z, a, b, c) {
    return (
      <mesh position={[a, b, c]} castShadow rotation={[Math.PI / 2, 0, 0]}>
        {/* radiusTop, radiusBottom, height, radialSegments */}
        <cylinderGeometry args={[x, y, z, 32]} />
        <meshStandardMaterial color="grey" />
      </mesh>
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

        {CylinderPrism(1, 1, 10, 1, 1, 1)}
        {CylinderPrism(1, 1, 10, 3.5, 1, 1)}
        {CylinderPrism(1, 1, 10, 6, 1, 1)}

        {/* {PodłogaPaki()}
        {elementyDekoracyjne()}
        {elementyDekoracyjne2()}
        {BelkaTył()}
        {ScianaFront()}
        {ScianaLewa()}
        {ScianaPrawa()}
        {ScianaTył()} */}

        {TrailerAll()}

        {/* PUNKT 0 0 0 */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </Canvas>
    </>
  );
}

export default Trailer;
