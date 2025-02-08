import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import {Model} from './3D_Models/Engine/Model.js'
import FadeContent from './Animations/FadeContent/FadeContent'

export default function Projects(props) {
    return (
        <div className="App">
            <div className="Model">
                <Canvas>
                    <Suspense fallback={null}>
                        <Model />
                        <OrbitControls/>
                        <Environment preset="sunset"/>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}
