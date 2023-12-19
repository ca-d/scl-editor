export declare const substationDoc = "<SCL>\n    <Substation name=\"AA1\">\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Lxxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Axxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Cxxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Fxxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Gxxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Ixxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Kxxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"Mxxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Pxxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Qxxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Rxxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Sxxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Txxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Xxxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"Yxxx\" lnInst=\"1\" />\n        <LNode iedName=\"None\" lnClass=\"Zxxx\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" prefix=\"prefix\" lnClass=\"PTOC\" lnInst=\"1\" />\n        <VoltageLevel name=\"E1\" >\n            <Bay name=\"Q01\" >\n                <Function name=\"func1\" >\n                    <SubFunction name=\"subFunc1\" >\n                        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n                        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n                        <GeneralEquipment name=\"genEquip1\" desc=\"desc\" />\n                        <GeneralEquipment name=\"genEquip2\" />\n                        <ConductingEquipment name=\"condEquip1\" desc=\"desc\" type=\"CBR\" />\n                        <ConductingEquipment name=\"condEquip2\" type=\"DIS\" />\n                        <SubFunction name=\"subSubFunc1\" desc=\"desc\" type=\"type\" >\n                            <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n                            <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n                        </SubFunction>\n                        <SubFunction name=\"subSubFunc2\" >\n                            <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n                            <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n                        </SubFunction>\n                    </SubFunction>\n                </Function>\n                <Function name=\"func2\" >\n                    <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n                    <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n                    <GeneralEquipment name=\"genEquip1\" desc=\"desc\" />\n                    <GeneralEquipment name=\"genEquip2\" />\n                    <ConductingEquipment name=\"condEquip1\" desc=\"desc\" type=\"CBR\" />\n                    <ConductingEquipment name=\"condEquip2\" type=\"DIS\" />\n                    <SubFunction name=\"subSubFunc3\" />\n                    <SubFunction name=\"subSubFunc4\" />\n                </Function>\n                <ConductingEquipment name=\"QA1\" desc=\"desc\" type=\"CBR\" >\n                    <EqFunction name=\"eqFunc1\" desc=\"desc\" type=\"type\">\n                        <EqSubFunction name=\"Trip\" desc=\"\" >\n                            <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"XCBR\" lnInst=\"1\" />\n                            <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n                            <GeneralEquipment name=\"someGenEquipment1\" desc=\"desc\" >\n                            </GeneralEquipment>\n                            <GeneralEquipment name=\"someGenEquipment2\" >\n                            </GeneralEquipment>\n                            <EqSubFunction name=\"tripA\" desc=\"desc\" >\n                            </EqSubFunction>\n                            <EqSubFunction name=\"tripB\" type=\"type\" desc=\"desc\" >\n                            </EqSubFunction>\n                            <EqSubFunction name=\"tripC\" type=\"type\" >\n                            </EqSubFunction>\n                        </EqSubFunction>\n                        <EqSubFunction name=\"Start\" >\n                        </EqSubFunction>\n                    </EqFunction>\n                </ConductingEquipment>\n                <ConductingEquipment name=\"Qb1\" type=\"DIS\" >\n                    <EqFunction name=\"eqFunc2\" >\n                        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"CSWI\" lnInst=\"1\" />\n                        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"CILO\" lnInst=\"1\" />\n                        <GeneralEquipment name=\"someGenEquipment1\" desc=\"desc\" />\n                        <GeneralEquipment name=\"someGenEquipment2\" />\n                        <EqSubFunction name=\"interlock\" desc=\"desc\" />\n                        <EqSubFunction name=\"control\" type=\"type\" desc=\"desc\" />\n                    </EqFunction>\n                </ConductingEquipment>\n            </Bay>\n            <Bay name=\"Q02\" >\n                <GeneralEquipment name=\"someGenEquip1\" desc=\"desc\" >\n                </GeneralEquipment>\n                <GeneralEquipment name=\"someGenEquip2\" >\n                    <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n                    <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n                    <EqFunction name=\"eqFunc1\" desc=\"desc\" />\n                    <EqFunction name=\"eqFunc2\" type=\"type\" desc=\"desc\" />\n                </GeneralEquipment>\n                <ConductingEquipment name=\"QA2\" type=\"CBR\" >\n                    <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"CSWI\" lnInst=\"1\" />\n                    <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"CILO\" lnInst=\"1\" />\n                    <SubEquipment name=\"phsA\" desc=\"desc\" phase=\"A\" >\n                        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"CSWI\" lnInst=\"1\" />\n                        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"CILO\" lnInst=\"1\" />\n                        <EqFunction name=\"eqFunc7\" />\n                        <EqFunction name=\"eqFunc8\" />\n                    </SubEquipment>\n                    <SubEquipment name=\"phsB\" />\n                    <SubEquipment name=\"phsC\" />\n                    <EqFunction name=\"eqFunc9\" />\n                    <EqFunction name=\"eqFunc10\" />\n                </ConductingEquipment>\n            </Bay>\n            <Bay name=\"PowTrans\" >\n                <PowerTransformer name=\"PTR1\" type=\"PTR\" >  \n                    <TransformerWinding name=\"winding1\" >\n                        <TapChanger name=\"ch1\" >\n                            <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n                            <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n                            <SubEquipment name=\"phsA\" />\n                            <SubEquipment name=\"phsB\" />\n                            <SubEquipment name=\"phsC\" />\n                            <EqFunction name=\"eqFunc11\" />\n                            <EqFunction name=\"eqFunc12\" />\n                        </TapChanger>\n                        <TapChanger name=\"ch2\" />\n                    </TransformerWinding>\n                    <TransformerWinding name=\"winding2\" />\n                    <TransformerWinding name=\"winding3\" desc=\"desc\" >\n                        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n                        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n                        <TapChanger name=\"ch1\" />\n                        <TapChanger name=\"ch2\" desc=\"desc\" />\n                        <SubEquipment name=\"phsA\" />\n                        <SubEquipment name=\"phsB\" />\n                        <SubEquipment name=\"phsC\" />\n                        <EqFunction name=\"eqFunc11\" />\n                        <EqFunction name=\"eqFunc12\" />\n                    </TransformerWinding>\n                </PowerTransformer>\n                <PowerTransformer name=\"PTR2\" type=\"PTR\" />\n                <PowerTransformer name=\"PTR3\" desc=\"desc\" type=\"PTR\" >\n                    <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n                    <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n                    <TransformerWinding name=\"winding1\" desc=\"desc\" />\n                    <TransformerWinding name=\"winding1\"  />\n                    <SubEquipment name=\"phsA\" />\n                    <SubEquipment name=\"phsB\" />\n                    <SubEquipment name=\"phsC\" />\n                    <EqFunction name=\"eqFunc11\" />\n                    <EqFunction name=\"eqFunc12\" />\n                </PowerTransformer>\n            </Bay>\n            <Bay name=\"testBay1\" />\n            <Bay name=\"testBay2\" desc=\"desc\" >\n                <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n                <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n                <PowerTransformer name=\"pTrans1\" type=\"PTR\" >\n                    <TransformerWinding name=\"wind1\" />\n                    <TransformerWinding name=\"wind2\" />\n                </PowerTransformer>\n                <PowerTransformer name=\"pTrans2\" type=\"PTR\" >\n                    <TransformerWinding name=\"wind1\" />\n                    <TransformerWinding name=\"wind2\" />\n                </PowerTransformer>\n                <PowerTransformer name=\"pTrans3\" type=\"PTR\" />\n                <PowerTransformer name=\"pTrans4\" type=\"PTR\" />\n                <GeneralEquipment name=\"genEquip1\" type=\"ERP\" />\n                <GeneralEquipment name=\"genEquip2\" type=\"ERP\" />\n                <GeneralEquipment name=\"genEquip3\" type=\"ERP\" />\n                <GeneralEquipment name=\"genEquip4\" type=\"ERP\" />\n                <ConductingEquipment name=\"condEq1\" type=\"CBR\" />\n                <ConductingEquipment name=\"condEq2\" type=\"DIS\" />\n                <ConductingEquipment name=\"condEq3\" type=\"DIS\" />\n                <ConductingEquipment name=\"condEq4\" type=\"DIS\" />\n                <ConductingEquipment name=\"condEq5\" type=\"DIS\" />\n                <Function name=\"func1\" desc=\"desc\" />\n                <Function name=\"func2\" />\n            </Bay>\n        </VoltageLevel>\n        <VoltageLevel name=\"testVoltLv1\" desc=\"desc\" >\n            <Voltage unit=\"V\" multiplier=\"k\" >110</Voltage>\n        </VoltageLevel>\n        <VoltageLevel name=\"testVoltLv2\" >\n            <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n            <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n            <PowerTransformer name=\"pTrans1\" type=\"PTR\" />\n            <PowerTransformer name=\"pTrans2\" type=\"PTR\" />\n            <GeneralEquipment name=\"genEquip1\" type=\"ERP\" />\n            <GeneralEquipment name=\"genEquip2\" type=\"ERP\" />\n            <GeneralEquipment name=\"genEquip3\" type=\"ERP\" />\n            <GeneralEquipment name=\"genEquip4\" type=\"ERP\" />\n            <Bay name=\"bay1\" >\n                <ConductingEquipment name=\"condEq1\" type=\"DIS\" />\n                <ConductingEquipment name=\"condEq2\" type=\"DIS\" />\n                <ConductingEquipment name=\"condEq3\" type=\"DIS\" />\n            </Bay>\n            <Bay name=\"bay2\" >\n                <ConductingEquipment name=\"condEq1\" type=\"DIS\" />\n                <ConductingEquipment name=\"condEq2\" type=\"DIS\" />\n                <ConductingEquipment name=\"condEq3\" type=\"DIS\" />\n            </Bay>\n            <Bay name=\"bay3\" >\n                <PowerTransformer name=\"pTrans1\" type=\"PTR\" />\n                <PowerTransformer name=\"pTrans2\" type=\"PTR\" />\n                <ConductingEquipment name=\"condEq1\" type=\"DIS\" />\n                <ConductingEquipment name=\"condEq2\" type=\"DIS\" />\n                <ConductingEquipment name=\"condEq3\" type=\"DIS\" />\n            </Bay>\n            <Function name=\"func1\" desc=\"desc\" />\n            <Function name=\"func2\" />\n        </VoltageLevel>\n        <VoltageLevel name=\"testVoltLv3\" >\n            <Voltage unit=\"V\" >20000</Voltage>\n            <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n            <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n            <PowerTransformer name=\"pTrans1\" type=\"PTR\" />\n            <PowerTransformer name=\"pTrans2\" type=\"PTR\" />\n            <GeneralEquipment name=\"genEquip3\" type=\"ERP\" />\n            <GeneralEquipment name=\"genEquip4\" type=\"ERP\" />\n            <Bay name=\"bay1\" >\n                <ConductingEquipment name=\"condEq1\" type=\"DIS\" />\n                <ConductingEquipment name=\"condEq2\" type=\"DIS\" />\n                <ConductingEquipment name=\"condEq3\" type=\"DIS\" />\n            </Bay>\n            <Bay name=\"bay2\" >\n                <ConductingEquipment name=\"condEq1\" type=\"DIS\" />\n                <ConductingEquipment name=\"condEq2\" type=\"DIS\" />\n                <ConductingEquipment name=\"condEq3\" type=\"DIS\" />\n            </Bay>\n            <Function name=\"func1\" desc=\"desc\" type=\"type\" />\n            <Function name=\"func2\" />\n        </VoltageLevel>\n    </Substation>\n    <Substation name=\"testSubst1\" />\n    <Substation name=\"testSubst2\" desc=\"desc\" >\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n        <PowerTransformer name=\"pTrans1\" type=\"PTR\" />\n        <PowerTransformer name=\"pTrans2\" type=\"PTR\" />\n        <GeneralEquipment name=\"genEquip1\" type=\"ERP\" />\n        <GeneralEquipment name=\"genEquip2\" type=\"ERP\" />\n        <GeneralEquipment name=\"genEquip3\" type=\"ERP\" />\n        <VoltageLevel name=\"voltLv1\" >\n            <Voltage ></Voltage>\n        </VoltageLevel>\n        <VoltageLevel name=\"voltLv2\" desc=\"desc\" >\n            <Voltage unit=\"V\" multiplier=\"k\" >100</Voltage>\n        </VoltageLevel>\n        <Function name=\"func1\" desc=\"desc\" type=\"type\" />\n        <Function name=\"func2\" />\n    </Substation>\n    <Line name=\"testLine1\" />\n    <Line name=\"testLine2\" desc=\"desc\" >\n        <Voltage ></Voltage>\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n        <GeneralEquipment name=\"genEquip2\" type=\"ERP\" />\n        <GeneralEquipment name=\"genEquip3\" type=\"ERP\" />\n        <ConductingEquipment name=\"condEq1\" type=\"DIS\" />\n        <ConductingEquipment name=\"condEq2\" type=\"DIS\" />\n        <ConductingEquipment name=\"condEq3\" type=\"DIS\" />\n        <Function name=\"func1\" desc=\"desc\" type=\"type\" />\n        <Function name=\"func2\" />\n    </Line>\n    <Line name=\"testLine3\" desc=\"desc\" >\n        <Voltage unit=\"V\" multiplier=\"k\" >20</Voltage>\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n        <GeneralEquipment name=\"genEquip2\" type=\"ERP\" />\n        <GeneralEquipment name=\"genEquip3\" type=\"ERP\" />\n        <ConductingEquipment name=\"condEq1\" type=\"DIS\" />\n        <ConductingEquipment name=\"condEq2\" type=\"DIS\" />\n        <ConductingEquipment name=\"condEq3\" type=\"DIS\" />\n        <Function name=\"func1\" desc=\"desc\" type=\"type\" />\n        <Function name=\"func2\" />\n    </Line>\n    <Process name=\"proc1\" />\n    <Process name=\"proc2\" desc=\"desc\" >\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"1\" />\n        <LNode iedName=\"IED1\" ldInst=\"ldInst\" lnClass=\"PTOC\" lnInst=\"2\" />\n        <GeneralEquipment name=\"genEquip2\" type=\"ERP\" />\n        <GeneralEquipment name=\"genEquip3\" type=\"ERP\" />\n        <ConductingEquipment name=\"condEq1\" type=\"DIS\" />\n        <ConductingEquipment name=\"condEq2\" type=\"DIS\" />\n        <ConductingEquipment name=\"condEq3\" type=\"DIS\" />\n        <Line name=\"line1\" />\n        <Line name=\"line2\" />\n        <Process name=\"subProc1\" />\n        <Process name=\"subProc2\" />\n        <Substation name=\"subSt1\" />\n        <Substation name=\"subSt1\" />\n        <Function name=\"func1\" desc=\"desc\" type=\"type\" />\n        <Function name=\"func2\" />\n    </Process>\n</SCL>\n";
export declare const missingSubstation = "<SCL>\n   <Header id=\"missingSubstation\"/>\n</SCL>\n";
