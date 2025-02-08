import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera, useAnimations } from '@react-three/drei'

export function Model(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('./engine.gltf')
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Default_-_Display_State-1">
                <OrthographicCamera
                    name="current"
                    makeDefault={false}
                    far={100}
                    near={0.01}
                    position={[3.907, 0.085, 3.278]}
                    rotation={[0, Math.PI / 4, 0]}
                />
                <group name="Engine">
                    <mesh
                        name="hex_flange_screw_am-5"
                        geometry={nodes['hex_flange_screw_am-5'].geometry}
                        material={materials['satin finish stainless steel-1']}
                        position={[0.125, -0.131, 0.016]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        name="hex_flange_screw_am-10"
                        geometry={nodes['hex_flange_screw_am-10'].geometry}
                        material={materials['satin finish stainless steel-1']}
                        position={[-0.057, -0.131, 0.203]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        name="hex_flange_screw_am-9"
                        geometry={nodes['hex_flange_screw_am-9'].geometry}
                        material={materials['satin finish stainless steel-1']}
                        position={[0.125, -0.131, 0.141]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        name="hex_flange_screw_am-4"
                        geometry={nodes['hex_flange_screw_am-4'].geometry}
                        material={materials['satin finish stainless steel-1']}
                        position={[-0.057, -0.131, -0.047]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        name="hex_flange_screw_am-6"
                        geometry={nodes['hex_flange_screw_am-6'].geometry}
                        material={materials['satin finish stainless steel-1']}
                        position={[-0.057, -0.131, 0.016]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        name="hex_flange_screw_am-11"
                        geometry={nodes['hex_flange_screw_am-11'].geometry}
                        material={materials['satin finish stainless steel-1']}
                        position={[-0.057, -0.131, 0.141]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        name="hex_flange_screw_am-7"
                        geometry={nodes['hex_flange_screw_am-7'].geometry}
                        material={materials['satin finish stainless steel-1']}
                        position={[0.125, -0.131, 0.078]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        name="hex_flange_screw_am-3"
                        geometry={nodes['hex_flange_screw_am-3'].geometry}
                        material={materials['satin finish stainless steel-1']}
                        position={[0.125, -0.131, -0.047]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        name="oil_filter-1"
                        geometry={nodes['oil_filter-1'].geometry}
                        material={nodes['oil_filter-1'].material}
                        position={[-0.075, 0.065, -0.015]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        name="hex_flange_screw_am-1"
                        geometry={nodes['hex_flange_screw_am-1'].geometry}
                        material={materials['satin finish stainless steel-1']}
                        position={[-0.057, -0.131, -0.11]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        name="hex_flange_screw_am-2"
                        geometry={nodes['hex_flange_screw_am-2'].geometry}
                        material={materials['satin finish stainless steel-1']}
                        position={[0.125, -0.131, -0.11]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        name="hex_flange_screw_am-8"
                        geometry={nodes['hex_flange_screw_am-8'].geometry}
                        material={materials['satin finish stainless steel-1']}
                        position={[-0.057, -0.131, 0.078]}
                        rotation={[0, 0, Math.PI / 2]}
                    />
                    <mesh
                        name="hex_flange_screw_am-12"
                        geometry={nodes['hex_flange_screw_am-12'].geometry}
                        material={materials['satin finish stainless steel-1']}
                        position={[0.125, -0.131, 0.203]}
                        rotation={[0, -0.616, Math.PI / 2]}
                    />
                    <mesh
                        name="belt-1"
                        geometry={nodes['belt-1'].geometry}
                        material={nodes['belt-1'].material}
                        position={[0.033, 0.125, 0.255]}
                    />
                    <group name="PistonBlock-1" position={[-0.179, -0.002, 0.095]}>
                        <mesh
                            name="BearingCap-1"
                            geometry={nodes['BearingCap-1'].geometry}
                            material={nodes['BearingCap-1'].material}
                            position={[-0.083, -0.071, -0.083]}
                        />
                        <mesh
                            name="JournalBearing-25"
                            geometry={nodes['JournalBearing-25'].geometry}
                            material={nodes['JournalBearing-25'].material}
                            position={[0.211, -0.021, 0.013]}
                            rotation={[0, 0, Math.PI]}
                        />
                        <mesh
                            name="CrankShaft-2"
                            geometry={nodes['CrankShaft-2'].geometry}
                            material={nodes['CrankShaft-2'].material}
                            position={[0.484, -0.088, -0.381]}
                            rotation={[Math.PI / 2, 1.33, Math.PI / 2]}
                        />
                        <group name="EngineBlock-1" position={[-0.083, -0.071, 0.267]}>
                            <mesh
                                name="mesh_17"
                                geometry={nodes.mesh_17.geometry}
                                material={nodes.mesh_17.material}
                            />
                            <mesh
                                name="mesh_17_1"
                                geometry={nodes.mesh_17_1.geometry}
                                material={nodes.mesh_17_1.material}
                            />
                            <mesh
                                name="mesh_17_2"
                                geometry={nodes.mesh_17_2.geometry}
                                material={nodes.mesh_17_2.material}
                            />
                        </group>
                        <group
                            name="Piston_Assembly-1"
                            position={[0.062, 0.114, 0.823]}
                            rotation={[-Math.PI / 2, 0.759, Math.PI / 2]}>
                            <mesh
                                name="CompressionRing-1"
                                geometry={nodes['CompressionRing-1'].geometry}
                                material={nodes['CompressionRing-1'].material}
                                position={[1.02, -0.1, 0.111]}
                                rotation={[0.812, 0, 0]}
                            />
                            <mesh
                                name="CompressionRing-2"
                                geometry={nodes['CompressionRing-2'].geometry}
                                material={nodes['CompressionRing-2'].material}
                                position={[1.02, -0.103, 0.108]}
                                rotation={[0.812, 0, 0]}
                            />
                            <mesh
                                name="Oilring-1"
                                geometry={nodes['Oilring-1'].geometry}
                                material={nodes['Oilring-1'].material}
                                position={[1.02, -0.106, 0.105]}
                                rotation={[0.812, 0, 0]}
                            />
                            <mesh
                                name="ConnectingRodMain-1"
                                geometry={nodes['ConnectingRodMain-1'].geometry}
                                material={nodes['ConnectingRodMain-1'].material}
                                position={[1.014, -0.195, -0.074]}
                                rotation={[2.102, Math.PI / 2, 0]}
                            />
                            <mesh
                                name="Piston_Head-3"
                                geometry={nodes['Piston_Head-3'].geometry}
                                material={nodes['Piston_Head-3'].material}
                                position={[1.02, -0.096, 0.115]}
                                rotation={[0.812, 0, Math.PI]}
                            />
                            <mesh
                                name="PistonPin-1"
                                geometry={nodes['PistonPin-1'].geometry}
                                material={nodes['PistonPin-1'].material}
                                position={[0.985, -0.118, 0.092]}
                                rotation={[-1.179, 0, -Math.PI / 2]}
                            />
                        </group>
                        <mesh
                            name="JournalBearing-15"
                            geometry={nodes['JournalBearing-15'].geometry}
                            material={nodes['JournalBearing-15'].material}
                            position={[0.211, -0.021, -0.25]}
                            rotation={[0, 0, Math.PI]}
                        />
                        <mesh
                            name="JournalBearing-20"
                            geometry={nodes['JournalBearing-20'].geometry}
                            material={nodes['JournalBearing-20'].material}
                            position={[0.211, -0.021, -0.232]}
                            rotation={[Math.PI, 0, -Math.PI]}
                        />
                        <mesh
                            name="JournalBearing-26"
                            geometry={nodes['JournalBearing-26'].geometry}
                            material={nodes['JournalBearing-26'].material}
                            position={[0.211, -0.021, 0.1]}
                            rotation={[0, 0, Math.PI]}
                        />
                        <mesh
                            name="JournalBearing-27"
                            geometry={nodes['JournalBearing-27'].geometry}
                            material={nodes['JournalBearing-27'].material}
                            position={[0.211, -0.021, -0.162]}
                            rotation={[0, 0, Math.PI]}
                        />
                        <mesh
                            name="JournalBearing-28"
                            geometry={nodes['JournalBearing-28'].geometry}
                            material={nodes['JournalBearing-28'].material}
                            position={[0.211, -0.021, -0.075]}
                            rotation={[0, 0, Math.PI]}
                        />
                        <mesh
                            name="JournalBearing-29"
                            geometry={nodes['JournalBearing-29'].geometry}
                            material={nodes['JournalBearing-29'].material}
                            position={[0.21, -0.021, -0.075]}
                        />
                        <mesh
                            name="JournalBearing-30"
                            geometry={nodes['JournalBearing-30'].geometry}
                            material={nodes['JournalBearing-30'].material}
                            position={[0.21, -0.021, -0.162]}
                        />
                        <mesh
                            name="JournalBearing-31"
                            geometry={nodes['JournalBearing-31'].geometry}
                            material={nodes['JournalBearing-31'].material}
                            position={[0.21, -0.021, 0.1]}
                        />
                        <mesh
                            name="JournalBearing-32"
                            geometry={nodes['JournalBearing-32'].geometry}
                            material={nodes['JournalBearing-32'].material}
                            position={[0.21, -0.021, 0.013]}
                        />
                        <mesh
                            name="BearingCap-6"
                            geometry={nodes['BearingCap-6'].geometry}
                            material={nodes['BearingCap-6'].material}
                            position={[-0.083, -0.071, 0.267]}
                        />
                        <mesh
                            name="BearingCap-7"
                            geometry={nodes['BearingCap-7'].geometry}
                            material={nodes['BearingCap-7'].material}
                            position={[-0.083, -0.071, 0.18]}
                        />
                        <mesh
                            name="BearingCap-8"
                            geometry={nodes['BearingCap-8'].geometry}
                            material={nodes['BearingCap-8'].material}
                            position={[-0.083, -0.071, 0.092]}
                        />
                        <mesh
                            name="BearingCap-9"
                            geometry={nodes['BearingCap-9'].geometry}
                            material={nodes['BearingCap-9'].material}
                            position={[-0.083, -0.071, 0.005]}
                        />
                        <mesh
                            name="hex_flange_screw_am-18"
                            geometry={nodes['hex_flange_screw_am-18'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.214, -0.01, 0.065]}
                            rotation={[-0.011, 0.039, -1.29]}
                        />
                        <mesh
                            name="hex_flange_screw_am-24"
                            geometry={nodes['hex_flange_screw_am-24'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.266, 0.005, -0.197]}
                            rotation={[-0.323, 0.833, -1.146]}
                        />
                        <group name="Piston_Assembly-7" position={[-0.184, 0.029, -0.203]}>
                            <mesh
                                name="CompressionRing-1_1"
                                geometry={nodes['CompressionRing-1_1'].geometry}
                                material={nodes['CompressionRing-1_1'].material}
                                position={[0.394, 0.096, 0.268]}
                                rotation={[0, -0.1, 0]}
                            />
                            <mesh
                                name="CompressionRing-2_1"
                                geometry={nodes['CompressionRing-2_1'].geometry}
                                material={nodes['CompressionRing-2_1'].material}
                                position={[0.394, 0.092, 0.268]}
                            />
                            <mesh
                                name="Oilring-1_1"
                                geometry={nodes['Oilring-1_1'].geometry}
                                material={nodes['Oilring-1_1'].material}
                                position={[0.394, 0.088, 0.268]}
                            />
                            <mesh
                                name="ConnectingRodMain-1_1"
                                geometry={nodes['ConnectingRodMain-1_1'].geometry}
                                material={nodes['ConnectingRodMain-1_1'].material}
                                position={[0.536, -0.045, 0.262]}
                                rotation={[0, 0, 1.851]}
                            />
                            <mesh
                                name="Piston_Head-3_1"
                                geometry={nodes['Piston_Head-3_1'].geometry}
                                material={nodes['Piston_Head-3_1'].material}
                                position={[0.394, 0.102, 0.268]}
                                rotation={[-Math.PI, -Math.PI / 2, 0]}
                            />
                            <mesh
                                name="PistonPin-1_1"
                                geometry={nodes['PistonPin-1_1'].geometry}
                                material={nodes['PistonPin-1_1'].material}
                                position={[0.394, 0.07, 0.233]}
                                rotation={[-Math.PI / 2, -0.392, Math.PI]}
                            />
                        </group>
                        <mesh
                            name="RodBearing-1"
                            geometry={nodes['RodBearing-1'].geometry}
                            material={nodes['RodBearing-1'].material}
                            position={[0.249, -0.03, -0.203]}
                            rotation={[0, 0, -2.861]}
                        />
                        <mesh
                            name="RodBearing-4"
                            geometry={nodes['RodBearing-4'].geometry}
                            material={nodes['RodBearing-4'].material}
                            position={[0.172, -0.012, -0.116]}
                            rotation={[0, 0, -0.281]}
                        />
                        <mesh
                            name="RodBearing-5"
                            geometry={nodes['RodBearing-5'].geometry}
                            material={nodes['RodBearing-5'].material}
                            position={[0.249, -0.03, 0.059]}
                            rotation={[0, 0, -2.861]}
                        />
                        <group name="Piston_Assembly-5" position={[-0.15, -0.039, -0.115]}>
                            <mesh
                                name="PistonPin-1_2"
                                geometry={nodes['PistonPin-1_2'].geometry}
                                material={nodes['PistonPin-1_2'].material}
                                position={[0.361, 0.156, 0.058]}
                                rotation={[-Math.PI / 2, -0.392, Math.PI]}
                            />
                            <mesh
                                name="Oilring-1_2"
                                geometry={nodes['Oilring-1_2'].geometry}
                                material={nodes['Oilring-1_2'].material}
                                position={[0.361, 0.174, 0.093]}
                            />
                            <mesh
                                name="CompressionRing-1_2"
                                geometry={nodes['CompressionRing-1_2'].geometry}
                                material={nodes['CompressionRing-1_2'].material}
                                position={[0.361, 0.182, 0.093]}
                            />
                            <mesh
                                name="CompressionRing-2_2"
                                geometry={nodes['CompressionRing-2_2'].geometry}
                                material={nodes['CompressionRing-2_2'].material}
                                position={[0.361, 0.178, 0.093]}
                            />
                            <mesh
                                name="Piston_Head-3_2"
                                geometry={nodes['Piston_Head-3_2'].geometry}
                                material={nodes['Piston_Head-3_2'].material}
                                position={[0.361, 0.188, 0.093]}
                                rotation={[-Math.PI, -Math.PI / 2, 0]}
                            />
                            <mesh
                                name="ConnectingRodMain-1_2"
                                geometry={nodes['ConnectingRodMain-1_2'].geometry}
                                material={nodes['ConnectingRodMain-1_2'].material}
                                position={[0.42, -0.017, 0.087]}
                                rotation={[0, 0, 1.29]}
                            />
                        </group>
                        <mesh
                            name="ConnectingRodCap-2"
                            geometry={nodes['ConnectingRodCap-2'].geometry}
                            material={nodes['ConnectingRodCap-2'].material}
                            position={[0.353, -0.016, -0.203]}
                            rotation={[0, 0, 1.851]}
                        />
                        <mesh
                            name="ConnectingRodCap-3"
                            geometry={nodes['ConnectingRodCap-3'].geometry}
                            material={nodes['ConnectingRodCap-3'].material}
                            position={[0.27, -0.055, -0.028]}
                            rotation={[0, 0, 1.29]}
                        />
                        <mesh
                            name="ConnectingRodCap-4"
                            geometry={nodes['ConnectingRodCap-4'].geometry}
                            material={nodes['ConnectingRodCap-4'].material}
                            position={[0.353, -0.016, 0.059]}
                            rotation={[0, 0, 1.851]}
                        />
                        <mesh
                            name="RodBearing-6"
                            geometry={nodes['RodBearing-6'].geometry}
                            material={nodes['RodBearing-6'].material}
                            position={[0.247, -0.03, -0.203]}
                            rotation={[0, 0, 0.281]}
                        />
                        <mesh
                            name="hex_flange_screw_am-22"
                            geometry={nodes['hex_flange_screw_am-22'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.208, 0.008, -0.11]}
                            rotation={[-0.227, -0.663, -1.93]}
                        />
                        <mesh
                            name="hex_flange_screw_am-23"
                            geometry={nodes['hex_flange_screw_am-23'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.214, -0.01, -0.197]}
                            rotation={[-0.016, 0.054, -1.29]}
                        />
                        <mesh
                            name="RodBearing-3"
                            geometry={nodes['RodBearing-3'].geometry}
                            material={nodes['RodBearing-3'].material}
                            position={[0.174, -0.012, -0.116]}
                            rotation={[0, 0, 2.861]}
                        />
                        <mesh
                            name="hex_flange_nut_am-9"
                            geometry={nodes['hex_flange_nut_am-9'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[0.281, -0.047, -0.197]}
                            rotation={[Math.PI / 2, 0.281, -2.51]}
                        />
                        <mesh
                            name="hex_flange_nut_am-13"
                            geometry={nodes['hex_flange_nut_am-13'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[0.14, -0.029, -0.022]}
                            rotation={[Math.PI / 2, -0.281, -0.275]}
                        />
                        <mesh
                            name="hex_flange_screw_am-20"
                            geometry={nodes['hex_flange_screw_am-20'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.155, 0.023, -0.022]}
                            rotation={[-0.003, -0.012, -1.851]}
                        />
                        <mesh
                            name="hex_flange_screw_am-21"
                            geometry={nodes['hex_flange_screw_am-21'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.155, 0.023, -0.11]}
                            rotation={[-0.005, -0.018, -1.851]}
                        />
                        <mesh
                            name="RodBearing-2"
                            geometry={nodes['RodBearing-2'].geometry}
                            material={nodes['RodBearing-2'].material}
                            position={[0.174, -0.012, -0.028]}
                            rotation={[0, 0, 2.861]}
                        />
                        <mesh
                            name="RodBearing-7"
                            geometry={nodes['RodBearing-7'].geometry}
                            material={nodes['RodBearing-7'].material}
                            position={[0.172, -0.012, -0.028]}
                            rotation={[0, 0, -0.281]}
                        />
                        <mesh
                            name="RodBearing-8"
                            geometry={nodes['RodBearing-8'].geometry}
                            material={nodes['RodBearing-8'].material}
                            position={[0.247, -0.03, 0.059]}
                            rotation={[0, 0, 0.281]}
                        />
                        <mesh
                            name="ConnectingRodCap-1"
                            geometry={nodes['ConnectingRodCap-1'].geometry}
                            material={nodes['ConnectingRodCap-1'].material}
                            position={[0.27, -0.055, -0.116]}
                            rotation={[0, 0, 1.29]}
                        />
                        <group name="Piston_Assembly-6" position={[-0.062, -0.37, -0.35]}>
                            <mesh
                                name="PistonPin-1_3"
                                geometry={nodes['PistonPin-1_3'].geometry}
                                material={nodes['PistonPin-1_3'].material}
                                position={[0.272, 0.488, 0.205]}
                                rotation={[-Math.PI / 2, -0.392, Math.PI]}
                            />
                            <mesh
                                name="CompressionRing-1_3"
                                geometry={nodes['CompressionRing-1_3'].geometry}
                                material={nodes['CompressionRing-1_3'].material}
                                position={[0.272, 0.514, 0.24]}
                                rotation={[0, 0.116, 0]}
                            />
                            <mesh
                                name="Oilring-1_3"
                                geometry={nodes['Oilring-1_3'].geometry}
                                material={nodes['Oilring-1_3'].material}
                                position={[0.272, 0.506, 0.24]}
                            />
                            <mesh
                                name="CompressionRing-2_3"
                                geometry={nodes['CompressionRing-2_3'].geometry}
                                material={nodes['CompressionRing-2_3'].material}
                                position={[0.272, 0.51, 0.24]}
                            />
                            <mesh
                                name="Piston_Head-3_3"
                                geometry={nodes['Piston_Head-3_3'].geometry}
                                material={nodes['Piston_Head-3_3'].material}
                                position={[0.272, 0.52, 0.24]}
                                rotation={[-Math.PI, -Math.PI / 2, 0]}
                            />
                            <mesh
                                name="ConnectingRodMain-1_3"
                                geometry={nodes['ConnectingRodMain-1_3'].geometry}
                                material={nodes['ConnectingRodMain-1_3'].material}
                                position={[0.331, 0.314, 0.234]}
                                rotation={[0, 0, 1.29]}
                            />
                        </group>
                        <mesh
                            name="hex_flange_screw_am-17"
                            geometry={nodes['hex_flange_screw_am-17'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.266, 0.005, 0.065]}
                            rotation={[0.244, -0.698, -1.201]}
                        />
                        <mesh
                            name="hex_flange_screw_am-19"
                            geometry={nodes['hex_flange_screw_am-19'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.208, 0.008, -0.022]}
                            rotation={[-2.882, -0.727, 1.95]}
                        />
                        <mesh
                            name="hex_flange_nut_am-11"
                            geometry={nodes['hex_flange_nut_am-11'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[0.229, -0.062, -0.197]}
                            rotation={[Math.PI / 2, 0.281, 0.268]}
                        />
                        <mesh
                            name="hex_flange_nut_am-12"
                            geometry={nodes['hex_flange_nut_am-12'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[0.229, -0.062, 0.065]}
                            rotation={[Math.PI / 2, 0.281, 0.257]}
                        />
                        <mesh
                            name="hex_flange_nut_am-14"
                            geometry={nodes['hex_flange_nut_am-14'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[0.193, -0.044, -0.11]}
                            rotation={[Math.PI / 2, -0.281, -0.284]}
                        />
                        <mesh
                            name="hex_flange_nut_am-15"
                            geometry={nodes['hex_flange_nut_am-15'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[0.193, -0.044, -0.022]}
                            rotation={[Math.PI / 2, -0.281, -0.275]}
                        />
                        <mesh
                            name="hex_flange_nut_am-10"
                            geometry={nodes['hex_flange_nut_am-10'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[0.14, -0.029, -0.11]}
                            rotation={[Math.PI / 2, -0.281, -0.284]}
                        />
                        <mesh
                            name="hex_flange_nut_am-16"
                            geometry={nodes['hex_flange_nut_am-16'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[0.281, -0.047, 0.065]}
                            rotation={[Math.PI / 2, 0.281, 0.257]}
                        />
                        <mesh
                            name="hex_flange_screw_am-26"
                            geometry={nodes['hex_flange_screw_am-26'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.179, -0.061, 0.109]}
                            rotation={[0, -0.534, Math.PI / 2]}
                        />
                        <mesh
                            name="hex_flange_screw_am-27"
                            geometry={nodes['hex_flange_screw_am-27'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.243, -0.061, 0.109]}
                            rotation={[0, -0.341, Math.PI / 2]}
                        />
                        <mesh
                            name="hex_flange_screw_am-28"
                            geometry={nodes['hex_flange_screw_am-28'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.243, -0.061, 0.021]}
                            rotation={[0, -0.825, Math.PI / 2]}
                        />
                        <mesh
                            name="hex_flange_screw_am-29"
                            geometry={nodes['hex_flange_screw_am-29'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.179, -0.061, 0.021]}
                            rotation={[0, -0.934, Math.PI / 2]}
                        />
                        <mesh
                            name="hex_flange_screw_am-36"
                            geometry={nodes['hex_flange_screw_am-36'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.211, -0.021, 0.188]}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                        <mesh
                            name="flywheelcap-1"
                            geometry={nodes['flywheelcap-1'].geometry}
                            material={nodes['flywheelcap-1'].material}
                            position={[0.212, 0.057, -0.257]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                        />
                        <mesh
                            name="hex_flange_screw_am-33"
                            geometry={nodes['hex_flange_screw_am-33'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.179, -0.061, -0.154]}
                            rotation={[0, -0.684, Math.PI / 2]}
                        />
                        <mesh
                            name="hex_flange_screw_am-34"
                            geometry={nodes['hex_flange_screw_am-34'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.243, -0.061, -0.241]}
                            rotation={[0, -0.684, Math.PI / 2]}
                        />
                        <mesh
                            name="pulleysidecover-1"
                            geometry={nodes['pulleysidecover-1'].geometry}
                            material={nodes['pulleysidecover-1'].material}
                            position={[0.232, 0.061, 0.149]}
                        />
                        <mesh
                            name="hex_flange_screw_am-30"
                            geometry={nodes['hex_flange_screw_am-30'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.243, -0.061, -0.066]}
                            rotation={[0, -0.804, Math.PI / 2]}
                        />
                        <mesh
                            name="hex_flange_screw_am-31"
                            geometry={nodes['hex_flange_screw_am-31'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.179, -0.061, -0.066]}
                            rotation={[0, -0.656, Math.PI / 2]}
                        />
                        <mesh
                            name="hex_flange_screw_am-35"
                            geometry={nodes['hex_flange_screw_am-35'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.179, -0.061, -0.241]}
                            rotation={[0, -0.684, Math.PI / 2]}
                        />
                        <mesh
                            name="hex_flange_screw_am-32"
                            geometry={nodes['hex_flange_screw_am-32'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.243, -0.061, -0.154]}
                            rotation={[0, -0.833, Math.PI / 2]}
                        />
                        <mesh
                            name="crankpulley-1"
                            geometry={nodes['crankpulley-1'].geometry}
                            material={nodes['crankpulley-1'].material}
                            position={[0.211, -0.021, 0.169]}
                            rotation={[0, 0, -1.811]}
                        />
                        <mesh
                            name="oilpan-1"
                            geometry={nodes['oilpan-1'].geometry}
                            material={nodes['oilpan-1'].material}
                            position={[0.212, -0.071, -0.057]}
                            rotation={[Math.PI, 0, 0]}
                        />
                    </group>
                    <group name="CylinderHead-1" position={[0.002, 0.281, -0.165]}>
                        <mesh
                            name="hex_flange_screw_am-15"
                            geometry={nodes['hex_flange_screw_am-15'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[-0.029, 0.026, 0.434]}
                            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                        />
                        <mesh
                            name="hex_flange_screw_am-16"
                            geometry={nodes['hex_flange_screw_am-16'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.091, 0.026, 0.434]}
                            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                        />
                        <mesh
                            name="Campulley-2"
                            geometry={nodes['Campulley-2'].geometry}
                            material={nodes['Campulley-2'].material}
                            position={[-0.029, 0.026, 0.418]}
                            rotation={[0, 0, -2.369]}
                        />
                        <group name="CylinderHead-1_1" position={[0.011, -0.083, 0.15]}>
                            <mesh
                                name="mesh_101"
                                geometry={nodes.mesh_101.geometry}
                                material={nodes.mesh_101.material}
                            />
                            <mesh
                                name="mesh_101_1"
                                geometry={nodes.mesh_101_1.geometry}
                                material={nodes.mesh_101_1.material}
                            />
                        </group>
                        <group
                            name="Intake_Valve_Assembly-9"
                            position={[0.016, -0.042, 0.031]}
                            rotation={[0.26, -0.556, 0.467]}>
                            <mesh
                                name="Valve_Spring-7"
                                geometry={nodes['Valve_Spring-7'].geometry}
                                material={nodes['Valve_Spring-7'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, 0.088, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-2"
                                geometry={nodes['Spring_Lock-2'].geometry}
                                material={nodes['Spring_Lock-2'].material}
                                position={[-0.006, 0.055, 0.02]}
                                rotation={[0, -0.994, 0]}
                            />
                            <mesh
                                name="Inlet_Valve-1"
                                geometry={nodes['Inlet_Valve-1'].geometry}
                                material={nodes['Inlet_Valve-1'].material}
                                position={[-0.005, -0.028, 0.022]}
                            />
                            <mesh
                                name="Cam_Bucket-1"
                                geometry={nodes['Cam_Bucket-1'].geometry}
                                material={nodes['Cam_Bucket-1'].material}
                                position={[-0.005, 0.064, 0.022]}
                                rotation={[0, -0.519, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-1"
                                geometry={nodes['Spring_Lock-1'].geometry}
                                material={nodes['Spring_Lock-1'].material}
                                position={[-0.004, 0.055, 0.023]}
                                rotation={[Math.PI, 0.994, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Seat-1"
                                geometry={nodes['Spring_Seat-1'].geometry}
                                material={nodes['Spring_Seat-1'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, 0.666, 0]}
                            />
                        </group>
                        <group
                            name="Intake_Valve_Assembly-10"
                            position={[0.002, -0.048, 0.058]}
                            rotation={[-0.055, 0.133, 0.396]}>
                            <mesh
                                name="Spring_Seat-1_1"
                                geometry={nodes['Spring_Seat-1_1'].geometry}
                                material={nodes['Spring_Seat-1_1'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, -0.083, 0]}
                            />
                            <mesh
                                name="Valve_Spring-7_1"
                                geometry={nodes['Valve_Spring-7_1'].geometry}
                                material={nodes['Valve_Spring-7_1'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, -0.661, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-2_1"
                                geometry={nodes['Spring_Lock-2_1'].geometry}
                                material={nodes['Spring_Lock-2_1'].material}
                                position={[-0.005, 0.055, 0.02]}
                                rotation={[-Math.PI, -1.392, -Math.PI]}
                            />
                            <mesh
                                name="Inlet_Valve-1_1"
                                geometry={nodes['Inlet_Valve-1_1'].geometry}
                                material={nodes['Inlet_Valve-1_1'].material}
                                position={[-0.005, -0.028, 0.022]}
                            />
                            <mesh
                                name="Spring_Lock-1_1"
                                geometry={nodes['Spring_Lock-1_1'].geometry}
                                material={nodes['Spring_Lock-1_1'].material}
                                position={[-0.005, 0.055, 0.023]}
                                rotation={[0, 1.392, 0]}
                            />
                            <mesh
                                name="Cam_Bucket-1_1"
                                geometry={nodes['Cam_Bucket-1_1'].geometry}
                                material={nodes['Cam_Bucket-1_1'].material}
                                position={[-0.005, 0.064, 0.022]}
                                rotation={[0, -0.661, -Math.PI]}
                            />
                        </group>
                        <group
                            name="Intake_Valve_Assembly-11"
                            position={[0.003, -0.058, 0.111]}
                            rotation={[-0.117, 0.274, 0.409]}>
                            <mesh
                                name="Valve_Spring-7_2"
                                geometry={nodes['Valve_Spring-7_2'].geometry}
                                material={nodes['Valve_Spring-7_2'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, -0.818, -Math.PI]}
                            />
                            <mesh
                                name="Inlet_Valve-1_2"
                                geometry={nodes['Inlet_Valve-1_2'].geometry}
                                material={nodes['Inlet_Valve-1_2'].material}
                                position={[-0.005, -0.028, 0.022]}
                            />
                            <mesh
                                name="Spring_Lock-1_2"
                                geometry={nodes['Spring_Lock-1_2'].geometry}
                                material={nodes['Spring_Lock-1_2'].material}
                                position={[-0.005, 0.055, 0.023]}
                                rotation={[0, 1.239, 0]}
                            />
                            <mesh
                                name="Spring_Lock-2_2"
                                geometry={nodes['Spring_Lock-2_2'].geometry}
                                material={nodes['Spring_Lock-2_2'].material}
                                position={[-0.004, 0.055, 0.02]}
                                rotation={[-Math.PI, -1.239, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Seat-1_2"
                                geometry={nodes['Spring_Seat-1_2'].geometry}
                                material={nodes['Spring_Seat-1_2'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, -0.239, 0]}
                            />
                            <mesh
                                name="Cam_Bucket-1_2"
                                geometry={nodes['Cam_Bucket-1_2'].geometry}
                                material={nodes['Cam_Bucket-1_2'].material}
                                position={[-0.005, 0.064, 0.022]}
                                rotation={[0, -0.818, -Math.PI]}
                            />
                        </group>
                        <group
                            name="Intake_Valve_Assembly-12"
                            position={[-0.007, -0.062, 0.186]}
                            rotation={[-2.992, 0.346, 2.723]}>
                            <mesh
                                name="Spring_Lock-2_3"
                                geometry={nodes['Spring_Lock-2_3'].geometry}
                                material={nodes['Spring_Lock-2_3'].material}
                                position={[-0.004, 0.055, 0.023]}
                                rotation={[-Math.PI, 1.162, Math.PI]}
                            />
                            <mesh
                                name="Spring_Seat-1_3"
                                geometry={nodes['Spring_Seat-1_3'].geometry}
                                material={nodes['Spring_Seat-1_3'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, 0.075, 0]}
                            />
                            <mesh
                                name="Valve_Spring-7_3"
                                geometry={nodes['Valve_Spring-7_3'].geometry}
                                material={nodes['Valve_Spring-7_3'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, -0.504, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-1_3"
                                geometry={nodes['Spring_Lock-1_3'].geometry}
                                material={nodes['Spring_Lock-1_3'].material}
                                position={[-0.006, 0.055, 0.02]}
                                rotation={[0, -1.162, 0]}
                            />
                            <mesh
                                name="Cam_Bucket-1_3"
                                geometry={nodes['Cam_Bucket-1_3'].geometry}
                                material={nodes['Cam_Bucket-1_3'].material}
                                position={[-0.005, 0.064, 0.022]}
                                rotation={[0, -0.504, -Math.PI]}
                            />
                            <mesh
                                name="Inlet_Valve-1_3"
                                geometry={nodes['Inlet_Valve-1_3'].geometry}
                                material={nodes['Inlet_Valve-1_3'].material}
                                position={[-0.005, -0.028, 0.022]}
                            />
                        </group>
                        <group
                            name="Intake_Valve_Assembly-13"
                            position={[-0.018, -0.056, 0.211]}
                            rotation={[-1.03, 1.121, 1.075]}>
                            <mesh
                                name="Valve_Spring-7_4"
                                geometry={nodes['Valve_Spring-7_4'].geometry}
                                material={nodes['Valve_Spring-7_4'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, -1.215, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-1_4"
                                geometry={nodes['Spring_Lock-1_4'].geometry}
                                material={nodes['Spring_Lock-1_4'].material}
                                position={[-0.007, 0.055, 0.022]}
                                rotation={[0, 0.2, 0]}
                            />
                            <mesh
                                name="Spring_Lock-2_4"
                                geometry={nodes['Spring_Lock-2_4'].geometry}
                                material={nodes['Spring_Lock-2_4'].material}
                                position={[-0.003, 0.055, 0.021]}
                                rotation={[-Math.PI, -0.2, -Math.PI]}
                            />
                            <mesh
                                name="Cam_Bucket-1_4"
                                geometry={nodes['Cam_Bucket-1_4'].geometry}
                                material={nodes['Cam_Bucket-1_4'].material}
                                position={[-0.005, 0.064, 0.022]}
                                rotation={[0, -1.215, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Seat-1_4"
                                geometry={nodes['Spring_Seat-1_4'].geometry}
                                material={nodes['Spring_Seat-1_4'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, -0.636, 0]}
                            />
                            <mesh
                                name="Inlet_Valve-1_4"
                                geometry={nodes['Inlet_Valve-1_4'].geometry}
                                material={nodes['Inlet_Valve-1_4'].material}
                                position={[-0.005, -0.028, 0.022]}
                            />
                        </group>
                        <group
                            name="Exhaust_Valve_Assembly-3"
                            position={[0.071, -0.063, 0.231]}
                            rotation={[-0.002, -0.004, -Math.PI / 8]}>
                            <mesh
                                name="Valve_Spring-2"
                                geometry={nodes['Valve_Spring-2'].geometry}
                                material={nodes['Valve_Spring-2'].material}
                                position={[-0.016, 0.065, 0.024]}
                                rotation={[0, -1.129, -Math.PI]}
                            />
                            <mesh
                                name="Exhaust_Valve-1"
                                geometry={nodes['Exhaust_Valve-1'].geometry}
                                material={nodes['Exhaust_Valve-1'].material}
                                position={[-0.016, -0.023, 0.024]}
                            />
                            <mesh
                                name="Cam_Bucket-1_5"
                                geometry={nodes['Cam_Bucket-1_5'].geometry}
                                material={nodes['Cam_Bucket-1_5'].material}
                                position={[-0.016, 0.069, 0.024]}
                                rotation={[-Math.PI, 0.079, 0]}
                            />
                            <mesh
                                name="Spring_Seat-1_5"
                                geometry={nodes['Spring_Seat-1_5'].geometry}
                                material={nodes['Spring_Seat-1_5'].material}
                                position={[-0.016, 0.064, 0.024]}
                                rotation={[0, -0.55, 0]}
                            />
                            <mesh
                                name="Spring_Lock-2_5"
                                geometry={nodes['Spring_Lock-2_5'].geometry}
                                material={nodes['Spring_Lock-2_5'].material}
                                position={[-0.014, 0.06, 0.025]}
                                rotation={[-Math.PI, 0.55, Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-1_5"
                                geometry={nodes['Spring_Lock-1_5'].geometry}
                                material={nodes['Spring_Lock-1_5'].material}
                                position={[-0.018, 0.06, 0.023]}
                                rotation={[0, -0.55, 0]}
                            />
                        </group>
                        <mesh
                            name="CamBearing-6"
                            geometry={nodes['CamBearing-6'].geometry}
                            material={nodes['CamBearing-6'].material}
                            position={[0.091, 0.026, 0.058]}
                            rotation={[0, 0, -Math.PI]}
                        />
                        <mesh
                            name="CamBearing-10"
                            geometry={nodes['CamBearing-10'].geometry}
                            material={nodes['CamBearing-10'].material}
                            position={[0.091, 0.026, 0.145]}
                            rotation={[0, 0, Math.PI]}
                        />
                        <mesh
                            name="CamBearing-9"
                            geometry={nodes['CamBearing-9'].geometry}
                            material={nodes['CamBearing-9'].material}
                            position={[0.091, 0.026, 0.243]}
                            rotation={[-Math.PI, 0, 0]}
                        />
                        <group
                            name="Exhaust_Valve_Assembly-6"
                            position={[0.071, -0.064, 0.109]}
                            rotation={[-0.001, -0.004, -Math.PI / 8]}>
                            <mesh
                                name="Exhaust_Valve-1_1"
                                geometry={nodes['Exhaust_Valve-1_1'].geometry}
                                material={nodes['Exhaust_Valve-1_1'].material}
                                position={[-0.016, -0.023, 0.024]}
                            />
                            <mesh
                                name="Cam_Bucket-1_6"
                                geometry={nodes['Cam_Bucket-1_6'].geometry}
                                material={nodes['Cam_Bucket-1_6'].material}
                                position={[-0.016, 0.069, 0.024]}
                                rotation={[0, 0.699, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Seat-1_6"
                                geometry={nodes['Spring_Seat-1_6'].geometry}
                                material={nodes['Spring_Seat-1_6'].material}
                                position={[-0.016, 0.064, 0.024]}
                            />
                            <mesh
                                name="Spring_Lock-2_6"
                                geometry={nodes['Spring_Lock-2_6'].geometry}
                                material={nodes['Spring_Lock-2_6'].material}
                                position={[-0.014, 0.06, 0.024]}
                                rotation={[-Math.PI, 0, -Math.PI]}
                            />
                            <mesh
                                name="Valve_Spring-2_1"
                                geometry={nodes['Valve_Spring-2_1'].geometry}
                                material={nodes['Valve_Spring-2_1'].material}
                                position={[-0.016, 0.065, 0.024]}
                                rotation={[0, -0.579, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-1_6"
                                geometry={nodes['Spring_Lock-1_6'].geometry}
                                material={nodes['Spring_Lock-1_6'].material}
                                position={[-0.018, 0.06, 0.024]}
                            />
                        </group>
                        <mesh
                            name="CamBearing-2"
                            geometry={nodes['CamBearing-2'].geometry}
                            material={nodes['CamBearing-2'].material}
                            position={[0.091, 0.026, 0.32]}
                            rotation={[0, 0, -Math.PI]}
                        />
                        <mesh
                            name="CamBearing-14"
                            geometry={nodes['CamBearing-14'].geometry}
                            material={nodes['CamBearing-14'].material}
                            position={[-0.029, 0.026, 0.145]}
                        />
                        <group
                            name="Exhaust_Valve_Assembly-4"
                            position={[0.071, -0.063, 0.197]}
                            rotation={[-0.002, -0.004, -Math.PI / 8]}>
                            <mesh
                                name="Spring_Lock-2_7"
                                geometry={nodes['Spring_Lock-2_7'].geometry}
                                material={nodes['Spring_Lock-2_7'].material}
                                position={[-0.014, 0.06, 0.025]}
                                rotation={[Math.PI, 0.483, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Seat-1_7"
                                geometry={nodes['Spring_Seat-1_7'].geometry}
                                material={nodes['Spring_Seat-1_7'].material}
                                position={[-0.016, 0.064, 0.024]}
                                rotation={[0, -0.483, 0]}
                            />
                            <mesh
                                name="Valve_Spring-2_2"
                                geometry={nodes['Valve_Spring-2_2'].geometry}
                                material={nodes['Valve_Spring-2_2'].material}
                                position={[-0.016, 0.065, 0.024]}
                                rotation={[0, -1.062, Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-1_7"
                                geometry={nodes['Spring_Lock-1_7'].geometry}
                                material={nodes['Spring_Lock-1_7'].material}
                                position={[-0.018, 0.06, 0.023]}
                                rotation={[0, -0.483, 0]}
                            />
                            <mesh
                                name="Exhaust_Valve-1_2"
                                geometry={nodes['Exhaust_Valve-1_2'].geometry}
                                material={nodes['Exhaust_Valve-1_2'].material}
                                position={[-0.016, -0.023, 0.024]}
                            />
                            <mesh
                                name="Cam_Bucket-1_7"
                                geometry={nodes['Cam_Bucket-1_7'].geometry}
                                material={nodes['Cam_Bucket-1_7'].material}
                                position={[-0.016, 0.069, 0.024]}
                                rotation={[-Math.PI, 0.206, 0]}
                            />
                        </group>
                        <group
                            name="Exhaust_Valve_Assembly-1"
                            position={[0.084, -0.064, 0.337]}
                            rotation={[-0.385, -0.737, -0.543]}>
                            <mesh
                                name="Valve_Spring-2_3"
                                geometry={nodes['Valve_Spring-2_3'].geometry}
                                material={nodes['Valve_Spring-2_3'].material}
                                position={[-0.016, 0.065, 0.024]}
                                rotation={[0, -0.793, Math.PI]}
                            />
                            <mesh
                                name="Cam_Bucket-1_8"
                                geometry={nodes['Cam_Bucket-1_8'].geometry}
                                material={nodes['Cam_Bucket-1_8'].material}
                                position={[-0.016, 0.069, 0.024]}
                                rotation={[0, -0.793, Math.PI]}
                            />
                            <mesh
                                name="Exhaust_Valve-1_3"
                                geometry={nodes['Exhaust_Valve-1_3'].geometry}
                                material={nodes['Exhaust_Valve-1_3'].material}
                                position={[-0.016, -0.023, 0.024]}
                            />
                            <mesh
                                name="Spring_Lock-2_8"
                                geometry={nodes['Spring_Lock-2_8'].geometry}
                                material={nodes['Spring_Lock-2_8'].material}
                                position={[-0.014, 0.06, 0.025]}
                                rotation={[Math.PI, 0.215, Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-1_8"
                                geometry={nodes['Spring_Lock-1_8'].geometry}
                                material={nodes['Spring_Lock-1_8'].material}
                                position={[-0.018, 0.06, 0.024]}
                                rotation={[0, -0.215, 0]}
                            />
                            <mesh
                                name="Spring_Seat-1_8"
                                geometry={nodes['Spring_Seat-1_8'].geometry}
                                material={nodes['Spring_Seat-1_8'].material}
                                position={[-0.016, 0.064, 0.024]}
                                rotation={[0, -0.111, 0]}
                            />
                        </group>
                        <group
                            name="Exhaust_Valve_Assembly-5"
                            position={[0.071, -0.064, 0.143]}
                            rotation={[-0.001, -0.004, -Math.PI / 8]}>
                            <mesh
                                name="Valve_Spring-2_4"
                                geometry={nodes['Valve_Spring-2_4'].geometry}
                                material={nodes['Valve_Spring-2_4'].material}
                                position={[-0.016, 0.065, 0.024]}
                                rotation={[0, -0.579, -Math.PI]}
                            />
                            <mesh
                                name="Exhaust_Valve-1_4"
                                geometry={nodes['Exhaust_Valve-1_4'].geometry}
                                material={nodes['Exhaust_Valve-1_4'].material}
                                position={[-0.016, -0.023, 0.024]}
                            />
                            <mesh
                                name="Spring_Seat-1_9"
                                geometry={nodes['Spring_Seat-1_9'].geometry}
                                material={nodes['Spring_Seat-1_9'].material}
                                position={[-0.016, 0.064, 0.024]}
                            />
                            <mesh
                                name="Spring_Lock-1_9"
                                geometry={nodes['Spring_Lock-1_9'].geometry}
                                material={nodes['Spring_Lock-1_9'].material}
                                position={[-0.018, 0.06, 0.024]}
                            />
                            <mesh
                                name="Cam_Bucket-1_9"
                                geometry={nodes['Cam_Bucket-1_9'].geometry}
                                material={nodes['Cam_Bucket-1_9'].material}
                                position={[-0.016, 0.069, 0.024]}
                                rotation={[0, 0.646, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-2_9"
                                geometry={nodes['Spring_Lock-2_9'].geometry}
                                material={nodes['Spring_Lock-2_9'].material}
                                position={[-0.014, 0.06, 0.024]}
                                rotation={[-Math.PI, 0, Math.PI]}
                            />
                        </group>
                        <group
                            name="Exhaust_Valve_Assembly-7"
                            position={[0.073, -0.059, 0.056]}
                            rotation={[-0.002, -0.004, -Math.PI / 8]}>
                            <mesh
                                name="Spring_Lock-1_10"
                                geometry={nodes['Spring_Lock-1_10'].geometry}
                                material={nodes['Spring_Lock-1_10'].material}
                                position={[-0.018, 0.06, 0.024]}
                            />
                            <mesh
                                name="Spring_Seat-1_10"
                                geometry={nodes['Spring_Seat-1_10'].geometry}
                                material={nodes['Spring_Seat-1_10'].material}
                                position={[-0.016, 0.064, 0.024]}
                            />
                            <mesh
                                name="Exhaust_Valve-1_5"
                                geometry={nodes['Exhaust_Valve-1_5'].geometry}
                                material={nodes['Exhaust_Valve-1_5'].material}
                                position={[-0.016, -0.023, 0.024]}
                            />
                            <mesh
                                name="Cam_Bucket-1_10"
                                geometry={nodes['Cam_Bucket-1_10'].geometry}
                                material={nodes['Cam_Bucket-1_10'].material}
                                position={[-0.016, 0.069, 0.024]}
                                rotation={[0, -1.203, -Math.PI]}
                            />
                            <mesh
                                name="Valve_Spring-2_5"
                                geometry={nodes['Valve_Spring-2_5'].geometry}
                                material={nodes['Valve_Spring-2_5'].material}
                                position={[-0.016, 0.065, 0.024]}
                                rotation={[0, -0.579, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-2_10"
                                geometry={nodes['Spring_Lock-2_10'].geometry}
                                material={nodes['Spring_Lock-2_10'].material}
                                position={[-0.014, 0.06, 0.024]}
                                rotation={[Math.PI, 0, -Math.PI]}
                            />
                        </group>
                        <mesh
                            name="CamBearing-1"
                            geometry={nodes['CamBearing-1'].geometry}
                            material={nodes['CamBearing-1'].material}
                            position={[0.091, 0.026, 0.145]}
                        />
                        <group
                            name="Intake_Valve_Assembly-16"
                            position={[0.019, -0.041, 0.331]}
                            rotation={[0.405, -0.761, 0.557]}>
                            <mesh
                                name="Spring_Lock-1_11"
                                geometry={nodes['Spring_Lock-1_11'].geometry}
                                material={nodes['Spring_Lock-1_11'].material}
                                position={[-0.004, 0.055, 0.023]}
                                rotation={[Math.PI, 0.763, -Math.PI]}
                            />
                            <mesh
                                name="Cam_Bucket-1_11"
                                geometry={nodes['Cam_Bucket-1_11'].geometry}
                                material={nodes['Cam_Bucket-1_11'].material}
                                position={[-0.005, 0.064, 0.022]}
                                rotation={[-Math.PI, -0.047, 0]}
                            />
                            <mesh
                                name="Spring_Seat-1_11"
                                geometry={nodes['Spring_Seat-1_11'].geometry}
                                material={nodes['Spring_Seat-1_11'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[Math.PI, -0.682, -Math.PI]}
                            />
                            <mesh
                                name="Valve_Spring-7_5"
                                geometry={nodes['Valve_Spring-7_5'].geometry}
                                material={nodes['Valve_Spring-7_5'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, 0.313, Math.PI]}
                            />
                            <mesh
                                name="Inlet_Valve-1_5"
                                geometry={nodes['Inlet_Valve-1_5'].geometry}
                                material={nodes['Inlet_Valve-1_5'].material}
                                position={[-0.005, -0.028, 0.022]}
                            />
                            <mesh
                                name="Spring_Lock-2_11"
                                geometry={nodes['Spring_Lock-2_11'].geometry}
                                material={nodes['Spring_Lock-2_11'].material}
                                position={[-0.006, 0.055, 0.02]}
                                rotation={[0, -0.763, 0]}
                            />
                        </group>
                        <group
                            name="Exhaust_Valve_Assembly-2"
                            position={[0.073, -0.059, 0.284]}
                            rotation={[0, 0, -Math.PI / 8]}>
                            <mesh
                                name="Exhaust_Valve-1_6"
                                geometry={nodes['Exhaust_Valve-1_6'].geometry}
                                material={nodes['Exhaust_Valve-1_6'].material}
                                position={[-0.016, -0.023, 0.024]}
                            />
                            <mesh
                                name="Cam_Bucket-1_12"
                                geometry={nodes['Cam_Bucket-1_12'].geometry}
                                material={nodes['Cam_Bucket-1_12'].material}
                                position={[-0.016, 0.069, 0.024]}
                                rotation={[0, 0.256, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-1_12"
                                geometry={nodes['Spring_Lock-1_12'].geometry}
                                material={nodes['Spring_Lock-1_12'].material}
                                position={[-0.018, 0.06, 0.024]}
                                rotation={[0, 0.02, 0]}
                            />
                            <mesh
                                name="Spring_Lock-2_12"
                                geometry={nodes['Spring_Lock-2_12'].geometry}
                                material={nodes['Spring_Lock-2_12'].material}
                                position={[-0.014, 0.06, 0.024]}
                                rotation={[-Math.PI, -0.02, Math.PI]}
                            />
                            <mesh
                                name="Spring_Seat-1_12"
                                geometry={nodes['Spring_Seat-1_12'].geometry}
                                material={nodes['Spring_Seat-1_12'].material}
                                position={[-0.016, 0.064, 0.024]}
                                rotation={[0, 0.02, 0]}
                            />
                            <mesh
                                name="Valve_Spring-2_6"
                                geometry={nodes['Valve_Spring-2_6'].geometry}
                                material={nodes['Valve_Spring-2_6'].material}
                                position={[-0.016, 0.065, 0.024]}
                                rotation={[0, -0.559, -Math.PI]}
                            />
                        </group>
                        <mesh
                            name="exhaustCamshaft-1"
                            geometry={nodes['exhaustCamshaft-1'].geometry}
                            material={nodes['exhaustCamshaft-1'].material}
                            position={[0.091, 0.026, 0.009]}
                            rotation={[0, 0, 0.433]}
                        />
                        <group
                            name="Intake_Valve_Assembly-15"
                            position={[0.012, -0.043, 0.29]}
                            rotation={[0.158, -0.363, 0.422]}>
                            <mesh
                                name="Valve_Spring-7_6"
                                geometry={nodes['Valve_Spring-7_6'].geometry}
                                material={nodes['Valve_Spring-7_6'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, -0.125, Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-1_13"
                                geometry={nodes['Spring_Lock-1_13'].geometry}
                                material={nodes['Spring_Lock-1_13'].material}
                                position={[-0.004, 0.055, 0.023]}
                                rotation={[Math.PI, 1.21, -Math.PI]}
                            />
                            <mesh
                                name="Inlet_Valve-1_6"
                                geometry={nodes['Inlet_Valve-1_6'].geometry}
                                material={nodes['Inlet_Valve-1_6'].material}
                                position={[-0.005, -0.028, 0.022]}
                            />
                            <mesh
                                name="Spring_Seat-1_13"
                                geometry={nodes['Spring_Seat-1_13'].geometry}
                                material={nodes['Spring_Seat-1_13'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, 0.454, 0]}
                            />
                            <mesh
                                name="Cam_Bucket-1_13"
                                geometry={nodes['Cam_Bucket-1_13'].geometry}
                                material={nodes['Cam_Bucket-1_13'].material}
                                position={[-0.005, 0.064, 0.022]}
                                rotation={[0, -0.125, Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-2_13"
                                geometry={nodes['Spring_Lock-2_13'].geometry}
                                material={nodes['Spring_Lock-2_13'].material}
                                position={[-0.006, 0.055, 0.02]}
                                rotation={[0, -1.21, 0]}
                            />
                        </group>
                        <group
                            name="Exhaust_Valve_Assembly-8"
                            position={[0.073, -0.059, 0.022]}
                            rotation={[-0.001, -0.004, -Math.PI / 8]}>
                            <mesh
                                name="Valve_Spring-2_7"
                                geometry={nodes['Valve_Spring-2_7'].geometry}
                                material={nodes['Valve_Spring-2_7'].material}
                                position={[-0.016, 0.065, 0.024]}
                                rotation={[0, -0.945, -Math.PI]}
                            />
                            <mesh
                                name="Exhaust_Valve-1_7"
                                geometry={nodes['Exhaust_Valve-1_7'].geometry}
                                material={nodes['Exhaust_Valve-1_7'].material}
                                position={[-0.016, -0.023, 0.024]}
                            />
                            <mesh
                                name="Cam_Bucket-1_14"
                                geometry={nodes['Cam_Bucket-1_14'].geometry}
                                material={nodes['Cam_Bucket-1_14'].material}
                                position={[-0.016, 0.069, 0.024]}
                                rotation={[0, 0.027, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-1_14"
                                geometry={nodes['Spring_Lock-1_14'].geometry}
                                material={nodes['Spring_Lock-1_14'].material}
                                position={[-0.018, 0.06, 0.023]}
                                rotation={[0, -0.366, 0]}
                            />
                            <mesh
                                name="Spring_Seat-1_14"
                                geometry={nodes['Spring_Seat-1_14'].geometry}
                                material={nodes['Spring_Seat-1_14'].material}
                                position={[-0.016, 0.064, 0.024]}
                                rotation={[0, -0.366, 0]}
                            />
                            <mesh
                                name="Spring_Lock-2_14"
                                geometry={nodes['Spring_Lock-2_14'].geometry}
                                material={nodes['Spring_Lock-2_14'].material}
                                position={[-0.014, 0.06, 0.025]}
                                rotation={[Math.PI, 0.366, Math.PI]}
                            />
                        </group>
                        <mesh
                            name="intakeCamshaft-1"
                            geometry={nodes['intakeCamshaft-1'].geometry}
                            material={nodes['intakeCamshaft-1'].material}
                            position={[-0.029, 0.026, 0.009]}
                            rotation={[0, 0, 1.82]}
                        />
                        <mesh
                            name="CamBearing-3"
                            geometry={nodes['CamBearing-3'].geometry}
                            material={nodes['CamBearing-3'].material}
                            position={[-0.029, 0.026, 0.32]}
                        />
                        <mesh
                            name="CamBearing-4"
                            geometry={nodes['CamBearing-4'].geometry}
                            material={nodes['CamBearing-4'].material}
                            position={[-0.029, 0.026, 0.32]}
                            rotation={[0, 0, Math.PI]}
                        />
                        <group
                            name="Intake_Valve_Assembly-14"
                            position={[0.004, -0.047, 0.233]}
                            rotation={[-0.022, 0.054, 0.393]}>
                            <mesh
                                name="Spring_Lock-2_15"
                                geometry={nodes['Spring_Lock-2_15'].geometry}
                                material={nodes['Spring_Lock-2_15'].material}
                                position={[-0.005, 0.055, 0.02]}
                                rotation={[-Math.PI, -1.477, -Math.PI]}
                            />
                            <mesh
                                name="Spring_Lock-1_15"
                                geometry={nodes['Spring_Lock-1_15'].geometry}
                                material={nodes['Spring_Lock-1_15'].material}
                                position={[-0.005, 0.055, 0.023]}
                                rotation={[0, 1.477, 0]}
                            />
                            <mesh
                                name="Cam_Bucket-1_15"
                                geometry={nodes['Cam_Bucket-1_15'].geometry}
                                material={nodes['Cam_Bucket-1_15'].material}
                                position={[-0.005, 0.064, 0.022]}
                                rotation={[0, -0.579, -Math.PI]}
                            />
                            <mesh
                                name="Valve_Spring-7_7"
                                geometry={nodes['Valve_Spring-7_7'].geometry}
                                material={nodes['Valve_Spring-7_7'].material}
                                position={[-0.005, 0.06, 0.022]}
                                rotation={[0, -0.579, Math.PI]}
                            />
                            <mesh
                                name="Spring_Seat-1_15"
                                geometry={nodes['Spring_Seat-1_15'].geometry}
                                material={nodes['Spring_Seat-1_15'].material}
                                position={[-0.005, 0.06, 0.022]}
                            />
                            <mesh
                                name="Inlet_Valve-1_7"
                                geometry={nodes['Inlet_Valve-1_7'].geometry}
                                material={nodes['Inlet_Valve-1_7'].material}
                                position={[-0.005, -0.028, 0.022]}
                            />
                        </group>
                        <mesh
                            name="CamBearing-5"
                            geometry={nodes['CamBearing-5'].geometry}
                            material={nodes['CamBearing-5'].material}
                            position={[0.091, 0.026, 0.058]}
                        />
                        <mesh
                            name="CamBearing-7"
                            geometry={nodes['CamBearing-7'].geometry}
                            material={nodes['CamBearing-7'].material}
                            position={[0.091, 0.026, 0.233]}
                        />
                        <mesh
                            name="CamBearing-8"
                            geometry={nodes['CamBearing-8'].geometry}
                            material={nodes['CamBearing-8'].material}
                            position={[0.091, 0.026, 0.32]}
                        />
                        <mesh
                            name="CamBearing-11"
                            geometry={nodes['CamBearing-11'].geometry}
                            material={nodes['CamBearing-11'].material}
                            position={[-0.029, 0.026, 0.145]}
                            rotation={[0, 0, Math.PI]}
                        />
                        <mesh
                            name="CamBearing-12"
                            geometry={nodes['CamBearing-12'].geometry}
                            material={nodes['CamBearing-12'].material}
                            position={[-0.029, 0.026, 0.233]}
                        />
                        <mesh
                            name="camBearingCap-2"
                            geometry={nodes['camBearingCap-2'].geometry}
                            material={nodes['camBearingCap-2'].material}
                            position={[-0.029, 0.026, 0.145]}
                        />
                        <mesh
                            name="CamBearing-13"
                            geometry={nodes['CamBearing-13'].geometry}
                            material={nodes['CamBearing-13'].material}
                            position={[-0.029, 0.026, 0.058]}
                        />
                        <group
                            name="cambolt-3"
                            position={[-0.052, 0.033, 0.326]}
                            rotation={[0, 0, -Math.PI / 2]}>
                            <mesh
                                name="hex_flange_screw_am-1_1"
                                geometry={nodes['hex_flange_screw_am-1_1'].geometry}
                                material={materials['satin finish stainless steel-1']}
                                position={[-0.017, 0, -0.001]}
                            />
                            <mesh
                                name="halfbolt-1"
                                geometry={nodes['halfbolt-1'].geometry}
                                material={nodes['halfbolt-1'].material}
                                position={[-0.08, -0.01, 0.004]}
                                rotation={[-2.609, 0, -Math.PI]}
                            />
                        </group>
                        <mesh
                            name="hex_flange_screw_am-11_1"
                            geometry={nodes['hex_flange_screw_am-11_1'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.113, 0.051, 0.15]}
                            rotation={[0, 0, -Math.PI / 2]}
                        />
                        <group
                            name="cambolt-4"
                            position={[-0.052, 0.033, 0.063]}
                            rotation={[0, 0, -Math.PI / 2]}>
                            <mesh
                                name="hex_flange_screw_am-1_2"
                                geometry={nodes['hex_flange_screw_am-1_2'].geometry}
                                material={materials['satin finish stainless steel-1']}
                                position={[-0.017, 0, -0.001]}
                            />
                            <mesh
                                name="halfbolt-1_1"
                                geometry={nodes['halfbolt-1_1'].geometry}
                                material={nodes['halfbolt-1_1'].material}
                                position={[-0.08, -0.01, 0.004]}
                                rotation={[-2.609, 0, -Math.PI]}
                            />
                        </group>
                        <mesh
                            name="hex_flange_nut_am-4"
                            geometry={nodes['hex_flange_nut_am-4'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[-0.052, 0.07, 0.325]}
                            rotation={[-Math.PI / 2, 0, 1.569]}
                        />
                        <mesh
                            name="CamBearing-16"
                            geometry={nodes['CamBearing-16'].geometry}
                            material={nodes['CamBearing-16'].material}
                            position={[-0.029, 0.026, 0.233]}
                            rotation={[0, 0, Math.PI]}
                        />
                        <mesh
                            name="hex_flange_screw_am-4_1"
                            geometry={nodes['hex_flange_screw_am-4_1'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[-0.052, 0.051, 0.15]}
                            rotation={[0, 0, -Math.PI / 2]}
                        />
                        <mesh
                            name="camBearingCap-4"
                            geometry={nodes['camBearingCap-4'].geometry}
                            material={nodes['camBearingCap-4'].material}
                            position={[-0.029, 0.026, 0.32]}
                        />
                        <group
                            name="cambolt-1"
                            position={[-0.007, 0.033, 0.326]}
                            rotation={[0, 0, -Math.PI / 2]}>
                            <mesh
                                name="hex_flange_screw_am-1_3"
                                geometry={nodes['hex_flange_screw_am-1_3'].geometry}
                                material={materials['satin finish stainless steel-1']}
                                position={[-0.017, 0, -0.001]}
                            />
                            <mesh
                                name="halfbolt-1_2"
                                geometry={nodes['halfbolt-1_2'].geometry}
                                material={nodes['halfbolt-1_2'].material}
                                position={[-0.08, -0.01, 0.004]}
                                rotation={[-2.609, 0, -Math.PI]}
                            />
                        </group>
                        <mesh
                            name="camBearingCap-1"
                            geometry={nodes['camBearingCap-1'].geometry}
                            material={nodes['camBearingCap-1'].material}
                            position={[-0.03, 0.026, 0.068]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                        />
                        <mesh
                            name="camBearingCap-3"
                            geometry={nodes['camBearingCap-3'].geometry}
                            material={nodes['camBearingCap-3'].material}
                            position={[-0.029, 0.026, 0.233]}
                        />
                        <mesh
                            name="camBearingCap-10"
                            geometry={nodes['camBearingCap-10'].geometry}
                            material={nodes['camBearingCap-10'].material}
                            position={[0.091, 0.026, 0.145]}
                        />
                        <mesh
                            name="hex_flange_screw_am-12_1"
                            geometry={nodes['hex_flange_screw_am-12_1'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.068, 0.051, 0.15]}
                            rotation={[0, 0, -Math.PI / 2]}
                        />
                        <mesh
                            name="hex_flange_screw_am-14"
                            geometry={nodes['hex_flange_screw_am-14'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.068, 0.051, 0.238]}
                            rotation={[0, 0, -Math.PI / 2]}
                        />
                        <mesh
                            name="IntakeCamCover-1"
                            geometry={nodes['IntakeCamCover-1'].geometry}
                            material={nodes['IntakeCamCover-1'].material}
                            position={[0.027, 0.026, 0.207]}
                        />
                        <mesh
                            name="CamBearing-15"
                            geometry={nodes['CamBearing-15'].geometry}
                            material={nodes['CamBearing-15'].material}
                            position={[-0.029, 0.026, 0.058]}
                            rotation={[0, 0, Math.PI]}
                        />
                        <mesh
                            name="hex_flange_screw_am-5_1"
                            geometry={nodes['hex_flange_screw_am-5_1'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[-0.007, 0.051, 0.238]}
                            rotation={[0, 0, -Math.PI / 2]}
                        />
                        <mesh
                            name="hex_flange_screw_am-6_1"
                            geometry={nodes['hex_flange_screw_am-6_1'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[-0.052, 0.051, 0.238]}
                            rotation={[0, 0, -Math.PI / 2]}
                        />
                        <mesh
                            name="camBearingCap-9"
                            geometry={nodes['camBearingCap-9'].geometry}
                            material={nodes['camBearingCap-9'].material}
                            position={[0.091, 0.026, 0.058]}
                        />
                        <mesh
                            name="camBearingCap-12"
                            geometry={nodes['camBearingCap-12'].geometry}
                            material={nodes['camBearingCap-12'].material}
                            position={[0.091, 0.026, 0.32]}
                        />
                        <mesh
                            name="hex_flange_screw_am-13"
                            geometry={nodes['hex_flange_screw_am-13'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[0.113, 0.051, 0.238]}
                            rotation={[0, 0, -Math.PI / 2]}
                        />
                        <group
                            name="cambolt-2"
                            position={[-0.007, 0.033, 0.063]}
                            rotation={[0, 0, -Math.PI / 2]}>
                            <mesh
                                name="hex_flange_screw_am-1_4"
                                geometry={nodes['hex_flange_screw_am-1_4'].geometry}
                                material={materials['satin finish stainless steel-1']}
                                position={[-0.017, 0, -0.001]}
                            />
                            <mesh
                                name="halfbolt-1_3"
                                geometry={nodes['halfbolt-1_3'].geometry}
                                material={nodes['halfbolt-1_3'].material}
                                position={[-0.08, -0.01, 0.004]}
                                rotation={[-2.609, 0, -Math.PI]}
                            />
                        </group>
                        <mesh
                            name="hex_flange_screw_am-3_1"
                            geometry={nodes['hex_flange_screw_am-3_1'].geometry}
                            material={materials['satin finish stainless steel-1']}
                            position={[-0.007, 0.051, 0.15]}
                            rotation={[0, -1.179, -Math.PI / 2]}
                        />
                        <mesh
                            name="Exhaust_Cam_Cover-1"
                            geometry={nodes['Exhaust_Cam_Cover-1'].geometry}
                            material={nodes['Exhaust_Cam_Cover-1'].material}
                            position={[0.011, 0.026, 0.15]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        />
                        <mesh
                            name="camBearingCap-11"
                            geometry={nodes['camBearingCap-11'].geometry}
                            material={nodes['camBearingCap-11'].material}
                            position={[0.091, 0.026, 0.233]}
                        />
                        <mesh
                            name="hex_flange_nut_am-1"
                            geometry={nodes['hex_flange_nut_am-1'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[-0.052, 0.07, 0.063]}
                            rotation={[-Math.PI / 2, 0, -0.787]}
                        />
                        <mesh
                            name="hex_flange_nut_am-2"
                            geometry={nodes['hex_flange_nut_am-2'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[-0.007, 0.07, 0.063]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        />
                        <mesh
                            name="hex_flange_nut_am-3"
                            geometry={nodes['hex_flange_nut_am-3'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[-0.007, 0.07, 0.325]}
                            rotation={[-Math.PI / 2, 0, 0.075]}
                        />
                        <mesh
                            name="hex_flange_nut_am-5"
                            geometry={nodes['hex_flange_nut_am-5'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[0.068, 0.07, 0.063]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        />
                        <mesh
                            name="hex_flange_nut_am-6"
                            geometry={nodes['hex_flange_nut_am-6'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[0.113, 0.07, 0.063]}
                            rotation={[-Math.PI / 2, 0, 0.032]}
                        />
                        <mesh
                            name="hex_flange_nut_am-7"
                            geometry={nodes['hex_flange_nut_am-7'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[0.068, 0.07, 0.325]}
                            rotation={[-Math.PI / 2, 0, 1.785]}
                        />
                        <mesh
                            name="hex_flange_nut_am-8"
                            geometry={nodes['hex_flange_nut_am-8'].geometry}
                            material={materials['satin finish stainless steel']}
                            position={[0.113, 0.07, 0.325]}
                            rotation={[-Math.PI / 2, 0, 1.498]}
                        />
                        <group
                            name="cambolt-5"
                            position={[0.068, 0.033, 0.063]}
                            rotation={[-Math.PI, -1.09, Math.PI / 2]}>
                            <mesh
                                name="hex_flange_screw_am-1_5"
                                geometry={nodes['hex_flange_screw_am-1_5'].geometry}
                                material={materials['satin finish stainless steel-1']}
                                position={[-0.017, 0, -0.001]}
                            />
                            <mesh
                                name="halfbolt-1_4"
                                geometry={nodes['halfbolt-1_4'].geometry}
                                material={nodes['halfbolt-1_4'].material}
                                position={[-0.08, -0.01, 0.004]}
                                rotation={[-2.609, 0, -Math.PI]}
                            />
                        </group>
                        <group
                            name="cambolt-6"
                            position={[0.113, 0.033, 0.063]}
                            rotation={[0, 0, -Math.PI / 2]}>
                            <mesh
                                name="hex_flange_screw_am-1_6"
                                geometry={nodes['hex_flange_screw_am-1_6'].geometry}
                                material={materials['satin finish stainless steel-1']}
                                position={[-0.017, 0, -0.001]}
                            />
                            <mesh
                                name="halfbolt-1_5"
                                geometry={nodes['halfbolt-1_5'].geometry}
                                material={nodes['halfbolt-1_5'].material}
                                position={[-0.08, -0.01, 0.004]}
                                rotation={[-2.609, 0, -Math.PI]}
                            />
                        </group>
                        <mesh
                            name="Campulley-1"
                            geometry={nodes['Campulley-1'].geometry}
                            material={nodes['Campulley-1'].material}
                            position={[0.091, 0.026, 0.418]}
                            rotation={[0, 0, 2.527]}
                        />
                        <group
                            name="Air_Intake_Port-10"
                            position={[-0.068, -0.067, 0.044]}
                            rotation={[0, -Math.PI / 2, 0]}>
                            <mesh
                                name="mesh_255"
                                geometry={nodes.mesh_255.geometry}
                                material={nodes.mesh_255.material}
                            />
                            <mesh
                                name="mesh_255_1"
                                geometry={nodes.mesh_255_1.geometry}
                                material={nodes.mesh_255_1.material}
                            />
                        </group>
                        <mesh
                            name="sparkplug-4"
                            geometry={nodes['sparkplug-4'].geometry}
                            material={nodes['sparkplug-4'].material}
                            position={[-0.034, -0.089, 0.07]}
                            rotation={[0, 0.116, 0]}
                        />
                        <group
                            name="Air_Intake_Port-11"
                            position={[-0.068, -0.067, 0.132]}
                            rotation={[0, -Math.PI / 2, 0]}>
                            <mesh
                                name="mesh_257"
                                geometry={nodes.mesh_257.geometry}
                                material={nodes.mesh_257.material}
                            />
                            <mesh
                                name="mesh_257_1"
                                geometry={nodes.mesh_257_1.geometry}
                                material={nodes.mesh_257_1.material}
                            />
                        </group>
                        <group
                            name="cambolt-7"
                            position={[0.068, 0.033, 0.326]}
                            rotation={[0, 0, -Math.PI / 2]}>
                            <mesh
                                name="hex_flange_screw_am-1_7"
                                geometry={nodes['hex_flange_screw_am-1_7'].geometry}
                                material={materials['satin finish stainless steel-1']}
                                position={[-0.017, 0, -0.001]}
                            />
                            <mesh
                                name="halfbolt-1_6"
                                geometry={nodes['halfbolt-1_6'].geometry}
                                material={nodes['halfbolt-1_6'].material}
                                position={[-0.08, -0.01, 0.004]}
                                rotation={[-2.609, 0, Math.PI]}
                            />
                        </group>
                        <group
                            name="Air_Intake_Port-12"
                            position={[-0.068, -0.067, 0.219]}
                            rotation={[0, -Math.PI / 2, 0]}>
                            <mesh
                                name="mesh_260"
                                geometry={nodes.mesh_260.geometry}
                                material={nodes.mesh_260.material}
                            />
                            <mesh
                                name="mesh_260_1"
                                geometry={nodes.mesh_260_1.geometry}
                                material={nodes.mesh_260_1.material}
                            />
                        </group>
                        <mesh
                            name="sparkplug-3"
                            geometry={nodes['sparkplug-3'].geometry}
                            material={nodes['sparkplug-3'].material}
                            position={[-0.016, -0.089, 0.195]}
                            rotation={[0, 0.767, 0]}
                        />
                        <mesh
                            name="sparkplug-2"
                            geometry={nodes['sparkplug-2'].geometry}
                            material={nodes['sparkplug-2'].material}
                            position={[-0.01, -0.089, 0.288]}
                            rotation={[0, 0.907, 0]}
                        />
                        <group
                            name="Air_Intake_Port-9"
                            position={[-0.068, -0.067, 0.307]}
                            rotation={[0, -Math.PI / 2, 0]}>
                            <mesh
                                name="mesh_263"
                                geometry={nodes.mesh_263.geometry}
                                material={nodes.mesh_263.material}
                            />
                            <mesh
                                name="mesh_263_1"
                                geometry={nodes.mesh_263_1.geometry}
                                material={nodes.mesh_263_1.material}
                            />
                        </group>
                        <group
                            name="cambolt-8"
                            position={[0.113, 0.033, 0.326]}
                            rotation={[0, 0, -Math.PI / 2]}>
                            <mesh
                                name="hex_flange_screw_am-1_8"
                                geometry={nodes['hex_flange_screw_am-1_8'].geometry}
                                material={materials['satin finish stainless steel-1']}
                                position={[-0.017, 0, -0.001]}
                            />
                            <mesh
                                name="halfbolt-1_7"
                                geometry={nodes['halfbolt-1_7'].geometry}
                                material={nodes['halfbolt-1_7'].material}
                                position={[-0.08, -0.01, 0.004]}
                                rotation={[-2.609, 0, -Math.PI]}
                            />
                        </group>
                        <mesh
                            name="sparkplug-1"
                            geometry={nodes['sparkplug-1'].geometry}
                            material={nodes['sparkplug-1'].material}
                            position={[-0.034, -0.089, 0.324]}
                            rotation={[0, -0.016, 0]}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/engine.gltf')
