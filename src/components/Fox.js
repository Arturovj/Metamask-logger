/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Omabuarts Studio (https://sketchfab.com/omabuarts)
license: SKETCHFAB Standard (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/felix-the-fox-wild-series-09513a6d526d46da9de8057d181575d4
title: Felix the Fox - Wild Series
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ action }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  const previousAction = usePrevious(action);

    useEffect(() => {
      console.log(actions)
      if(previousAction){
        actions[previousAction].stop();
      }
      actions[action].play()
    }, [actions, action]);
    


  return (
    <group ref={group}  dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="ae4b05f47bc0482f89ca70ff34b83ca6fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Rig" rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
            
                    <skinnedMesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.Mat_Fox} skeleton={nodes.Object_36.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')


function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}