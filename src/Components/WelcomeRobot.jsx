import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WelcomeRobot({ isSpeaking }) {
  const mountRef = useRef(null);

  const speakingRef = useRef(isSpeaking);

  useEffect(() => {
    speakingRef.current = isSpeaking;
  }, [isSpeaking]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer;
    let animationId;
    let observer;

    const scene = new THREE.Scene();

    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);

    camera.position.set(0, 0.05, 8.5);
    camera.lookAt(0, 0.05, 0);

    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
    } catch (error) {
      console.error("Robot WebGL Error:", error);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // Robot root
    const robot = new THREE.Group();
    scene.add(robot);
    console.log("Robot component loaded");

    // Materials
    const armor = new THREE.MeshStandardMaterial({
      color: 0xe5edf5,
      metalness: 0.8,
      roughness: 0.22,
    });

    const darkArmor = new THREE.MeshStandardMaterial({
      color: 0x172638,
    });

    const visorMaterial = new THREE.MeshStandardMaterial({
      color: 0x061525,
      metalness: 0.7,
      roughness: 0.15,
    });

    const blueMetal = new THREE.MeshStandardMaterial({
      color: 0x087bc7,
      metalness: 0.8,
      roughness: 0.2,
    });

    const glowMaterial = new THREE.MeshStandardMaterial({
      color: 0x67e8ff,
      emissive: 0x00bfff,
      emissiveIntensity: 2.5,
      metalness: 0.2,
      roughness: 0.2,
    });

    // Helper to create robot parts
    const createPart = (geometry, material, position, parent = robot) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...position);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      parent.add(mesh);
      return mesh;
    };

    const sphere = (material, position, scale, parent = robot) => {
      const mesh = createPart(
        new THREE.SphereGeometry(1, 40, 40),
        material,
        position,
        parent,
      );

      mesh.scale.set(...scale);
      return mesh;
    };

    const capsule = (material, position, radius, length, parent = robot) => {
      return createPart(
        new THREE.CapsuleGeometry(radius, length, 8, 24),
        material,
        position,
        parent,
      );
    };

    // HEAD
    const headGroup = new THREE.Group();
    robot.add(headGroup);

    sphere(armor, [0, 1.15, 0], [0.82, 0.78, 0.68], headGroup);

    // Dark glass face
    sphere(visorMaterial, [0, 1.13, 0.48], [0.68, 0.49, 0.23], headGroup);

    // Eyes
    const leftEye = sphere(
      glowMaterial,
      [-0.25, 1.25, 0.67],
      [0.105, 0.14, 0.055],
      headGroup,
    );

    const rightEye = sphere(
      glowMaterial,
      [0.25, 1.25, 0.67],
      [0.105, 0.14, 0.055],
      headGroup,
    );

    // Mouth
    const mouth = sphere(
      glowMaterial,
      [0, 0.91, 0.685],
      [0.16, 0.035, 0.035],
      headGroup,
    );

    // Antenna
    capsule(blueMetal, [0, 1.99, 0], 0.035, 0.18, headGroup);

    sphere(glowMaterial, [0, 2.12, 0], [0.09, 0.09, 0.09], headGroup);

    // Side ear modules
    sphere(darkArmor, [-0.83, 1.15, 0], [0.16, 0.25, 0.18], headGroup);

    sphere(blueMetal, [-0.91, 1.15, 0.02], [0.09, 0.17, 0.15], headGroup);

    sphere(darkArmor, [0.83, 1.15, 0], [0.16, 0.25, 0.18], headGroup);

    sphere(blueMetal, [0.91, 1.15, 0.02], [0.09, 0.17, 0.15], headGroup);

    // NECK
    capsule(blueMetal, [0, 0.28, 0], 0.18, 0.12);

    // BODY - Slim Metallic Armor
    const bodyGroup = new THREE.Group();
    robot.add(bodyGroup);

    // Main torso
    capsule(darkArmor, [0, -0.48, 0], 0.43, 0.48, bodyGroup);

    // Chest armor panel
    sphere(darkArmor, [0, -0.38, 0.38], [0.38, 0.43, 0.16], bodyGroup);

    // Blue glowing chest core
    const chestLight = sphere(
      glowMaterial,
      [0, -0.35, 0.535],
      [0.14, 0.14, 0.055],
      bodyGroup,
    );

    // Chest side details
    sphere(blueMetal, [-0.28, -0.42, 0.42], [0.055, 0.16, 0.07], bodyGroup);

    sphere(blueMetal, [0.28, -0.42, 0.42], [0.055, 0.16, 0.07], bodyGroup);

    // Waist armor
    sphere(darkArmor, [0, -1.02, 0], [0.42, 0.16, 0.36], bodyGroup);

    // ARMS
    const leftArm = new THREE.Group();
    const rightArm = new THREE.Group();

    leftArm.position.set(-0.68, -0.12, 0);
    rightArm.position.set(0.68, -0.12, 0);

    robot.add(leftArm, rightArm);

    [leftArm, rightArm].forEach((arm) => {
      sphere(blueMetal, [0, 0, 0], [0.22, 0.22, 0.22], arm);

      capsule(armor, [0, -0.38, 0], 0.15, 0.38, arm);

      sphere(darkArmor, [0, -0.68, 0], [0.16, 0.15, 0.16], arm);

      capsule(armor, [0, -0.9, 0], 0.13, 0.27, arm);

      sphere(blueMetal, [0, -1.12, 0.04], [0.17, 0.16, 0.15], arm);
    });

    leftArm.rotation.z = 0.12;
    rightArm.rotation.z = -0.12;

    // LEGS
    const leftLeg = new THREE.Group();
    const rightLeg = new THREE.Group();

    leftLeg.position.set(-0.3, -1.15, 0);
    rightLeg.position.set(0.3, -1.15, 0);

    robot.add(leftLeg, rightLeg);

    [leftLeg, rightLeg].forEach((leg) => {
      capsule(armor, [0, -0.25, 0], 0.16, 0.35, leg);

      sphere(darkArmor, [0, -0.53, 0], [0.17, 0.15, 0.17], leg);

      capsule(armor, [0, -0.77, 0], 0.14, 0.25, leg);

      sphere(blueMetal, [0, -1.03, 0.12], [0.23, 0.15, 0.32], leg);
    });

    // LIGHTING
    scene.add(new THREE.AmbientLight(0xffffff, 1.4));

    const mainLight = new THREE.DirectionalLight(0xffffff, 3.5);
    mainLight.position.set(3, 5, 6);
    scene.add(mainLight);

    const blueLight = new THREE.PointLight(0x00aaff, 18, 10);
    blueLight.position.set(-3, 1, 3);
    scene.add(blueLight);

    const rimLight = new THREE.PointLight(0x168cff, 16, 10);
    rimLight.position.set(3, 1, -3);
    scene.add(rimLight);

    // ANIMATION
    const startTime = performance.now();

    const animate = (timestamp) => {
      animationId = requestAnimationFrame(animate);

      const elapsed = (timestamp - startTime) / 1000;

      // Floating
      robot.position.y = Math.sin(elapsed * 1.4) * 0.045;

      // Natural mouth animation
      if (speakingRef.current) {
        const mouthMovement = Math.abs(Math.sin(elapsed * 12));

        mouth.scale.y = 0.035 + mouthMovement * 0.09;
        mouth.scale.x = 0.16 + mouthMovement * 0.025;
      } else {
        mouth.scale.set(0.16, 0.035, 0.035);
      }
      // Natural head movement
      if (speakingRef.current) {
        headGroup.rotation.y = Math.sin(elapsed * 2) * 0.07;
        headGroup.rotation.x = Math.sin(elapsed * 3) * 0.025;
      } else {
        headGroup.rotation.y = Math.sin(elapsed * 0.6) * 0.045;
        headGroup.rotation.x = 0;
      }

      // Gentle arm movement
      leftArm.rotation.z = 0.12 + Math.sin(elapsed * 1.2) * 0.025;
      rightArm.rotation.z = -0.12 - Math.sin(elapsed * 1.2) * 0.025;

      // Chest glow pulse
      const pulse = 1 + Math.sin(elapsed * 3) * 0.12;

      chestLight.scale.set(0.14 * pulse, 0.14 * pulse, 0.055);

      renderer.render(scene, camera);
    };

    animationId = requestAnimationFrame(animate);

    // RESPONSIVE RESIZE
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      if (!newWidth || !newHeight) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    observer = new ResizeObserver(handleResize);
    observer.observe(container);

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationId);
      observer?.disconnect();

      scene.traverse((object) => {
        if (!object.isMesh) return;

        object.geometry.dispose();

        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material.dispose();
        }
      });

      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="h-full min-h-[350px] w-full overflow-hidden"
    />
  );
}
