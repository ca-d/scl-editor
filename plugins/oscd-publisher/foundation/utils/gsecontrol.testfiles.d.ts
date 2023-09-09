export declare const withSubscriptionSupervision = "\n<SCL version=\"2007\">\n<Communication>\n    <SubNetwork name=\"someSubNet\">\n        <ConnectedAP iedName=\"srcIED\" apName=\"someAP\">\n            <GSE ldInst=\"someLDInst\" cbName=\"someGse2\" />\n        </ConnectedAP>\n    </SubNetwork>\n</Communication>\n<IED name=\"sinkIED\">\n    <AccessPoint name=\"someAP\">\n        <Server>\n            <LDevice inst=\"someLDevice\">\n                <LN0 lnClass=\"LLN0\" inst=\"\" lnType=\"someLnType\">\n                    <Inputs desc=\"GSE\">\n                        <ExtRef \n                            iedName=\"srcIED\" \n                            ldInst=\"someLDInst\" \n                            lnClass=\"LLN0\" \n                            doName=\"Op\" \n                            daName=\"general\"\n                            srcLDInst=\"someLDInst\"\n                            srcLNClass=\"LLN0\"\n                            srcCBName=\"someGse\"\n                            serviceType=\"GOOSE\" />\n                        <ExtRef \n                            iedName=\"srcIED\" \n                            ldInst=\"someLDInst\" \n                            lnClass=\"LLN0\" \n                            doName=\"Op\" \n                            daName=\"q\"\n                            srcLDInst=\"someLDInst\"\n                            srcLNClass=\"LLN0\"\n                            srcLNInst=\"\"\n                            srcCBName=\"someGse\"\n                            serviceType=\"GOOSE\" />\n                        <ExtRef \n                            iedName=\"srcIED\" \n                            ldInst=\"someLDInst\" \n                            lnClass=\"LLN0\" \n                            doName=\"Beh\" \n                            daName=\"stVal\"\n                            srcPrefix=\"\"\n                            srcLDInst=\"someLDInst\"\n                            srcLNClass=\"LLN0\"\n                            srcCBName=\"someGse2\"\n                            serviceType=\"GOOSE\" \n                            intAddr=\"someIntAddr\" />\n                        <ExtRef \n                            iedName=\"srcIED\" \n                            ldInst=\"someLDInst\" \n                            lnClass=\"LLN0\" \n                            doName=\"Beh\" \n                            daName=\"q\"\n                            srcLDInst=\"someLDInst\"\n                            srcPrefix=\"\"\n                            srcLNClass=\"LLN0\"\n                            srcLNInst=\"\"\n                            srcCBName=\"someGse3\"\n                            serviceType=\"GOOSE\" />\n                    </Inputs>\n                </LN0>\n                <LN prefix=\"\" lnClass=\"PROC\" lnInst=\"1\" lnType=\"pTOClnType\">\n                    <Inputs desc=\"SMV\">\n                        <ExtRef \n                            iedName=\"srcIED\" \n                            ldInst=\"someLDInst\"\n                            prefix=\"L1\"\n                            lnClass=\"TCTR\"\n                            lnInst=\"1\" \n                            doName=\"A.phsA\" \n                            daName=\"AmpSv.instMag.i\"\n                            srcLDInst=\"someLDInst\"\n                            srcPrefix=\"\"\n                            srcLNClass=\"LLN0\"\n                            srcLNInst=\"\"\n                            srcCBName=\"someSmv\"\n                            serviceType=\"SMV\" />\n                        <ExtRef \n                            iedName=\"srcIED\" \n                            ldInst=\"someLDInst\" \n                            prefix=\"L1\"\n                            lnClass=\"TVTR\"\n                            lnInst=\"1\" \n                            doName=\"PhV.phsA\" \n                            daName=\"VolSv.instMag.i\"\n                            srcLDInst=\"someLDInst\"\n                            srcLNClass=\"LLN0\"\n                            srcCBName=\"someSmv\"\n                            serviceType=\"SMV\" />\n                    </Inputs>\n                </LN>\n            </LDevice>\n            <LDevice inst=\"smvSupervision\">\n                <LN lnClass=\"LSVS\" inst=\"1\" lnType=\"someLSVSType\">\n                    <DOI name=\"SvCBRef\">\n                        <DAI name=\"setSrcRef\">\n                            <Val>srcIEDsomeLDInst/LLN0.someSmv</Val>\n                        </DAI>\n                    </DOI>\n                </LN>\n            </LDevice>\n            <LDevice inst=\"gseSupervision\">\n                <LN lnClass=\"LGOS\" inst=\"1\" lnType=\"someLGOSType\">\n                    <DOI name=\"GoCBRef\">\n                        <DAI name=\"setSrcRef\">\n                            <Val>srcIEDsomeLDInst/LLN0.someGse</Val>\n                        </DAI>\n                    </DOI>\n                </LN>\n                <LN lnClass=\"LGOS\" inst=\"2\" lnType=\"someLGOSType\">\n                    <Private type=\"OpenSCD.create\" />\n                    <DOI name=\"GoCBRef\">\n                        <DAI name=\"setSrcRef\">\n                            <Val>srcIEDsomeLDInst/LLN0.someGse2</Val>\n                        </DAI>\n                    </DOI>\n                </LN>           \n            </LDevice>\n        </Server>\n    </AccessPoint>\n</IED>\n<IED name=\"srcIED\">\n    <AccessPoint name=\"someAP\">\n        <Server>\n            <LDevice inst=\"someLDInst\">\n                <LN0 lnClass=\"LLN0\" inst=\"\" lnType=\"someLnType\">\n                    <DataSet name=\"gseDatSet\">\n                        <FCDA \n                            ldInst=\"someLDInst\" \n                            prefix=\"\" \n                            lnClass=\"LLN0\" \n                            lnInst=\"\" \n                            doName=\"Op\" \n                            daName=\"general\" \n                            fc=\"ST\" />\n                        <FCDA \n                            ldInst=\"someLDInst\" \n                            prefix=\"\" \n                            lnClass=\"LLN0\" \n                            lnInst=\"\" \n                            doName=\"Op\" \n                            daName=\"q\" \n                            fc=\"ST\" />\n                        <FCDA \n                            ldInst=\"someLDInst\" \n                            lnClass=\"LLN0\" \n                            doName=\"Beh\" \n                            daName=\"stVal\" \n                            fc=\"ST\" />\n                        <FCDA \n                            ldInst=\"someLDInst\" \n                            prefix=\"\" \n                            lnClass=\"LLN0\" \n                            lnInst=\"\" \n                            doName=\"Beh\" \n                            daName=\"q\" \n                            fc=\"ST\" />\n                    </DataSet>\n                    <DataSet name=\"smvDataSet\">\n                        <FCDA \n                            ldInst=\"smvLDInst\" \n                            prefix=\"L1\" \n                            lnClass=\"TCTR\" \n                            lnInst=\"1\" \n                            doName=\"A.phsA\" \n                            daName=\"AmpSv.instMag.i\" \n                            fc=\"MX\" />\n                        <FCDA \n                            ldInst=\"smvLDInst\" \n                            prefix=\"L1\" \n                            lnClass=\"TVTR\" \n                            lnInst=\"1\" \n                            doName=\"PhV.phsA\" \n                            daName=\"VolSv.instMag.i\" \n                            fc=\"MX\" />\n                    </DataSet>\n                    <GSEControl name=\"someGse\" datSet=\"gseDatSet\" confRev=\"10001\"/>\n                    <GSEControl name=\"someGse2\" datSet=\"gseDatSet\"/>\n                    <GSEControl name=\"someGse3\" datSet=\"gseDatSet\"/>\n                    <SampledValueControl name=\"someSmv\" datSet=\"smvDataSet\"/>\n                </LN0>\n            </LDevice>\n        </Server>\n    </AccessPoint>\n</IED>\n<DataTypeTemplates>\n    <LNodeType id=\"someLGOSType\" lnClass=\"LGOS\">\n        <DO name=\"GoCBRef\" type=\"someGseORG\"/>\n    </LNodeType>\n    <LNodeType id=\"someLSVSType\" lnClass=\"LSVS\">\n        <DO name=\"SvCBRef\" type=\"someSmvORG\"/>\n    </LNodeType>\n    <DOType cdc=\"ORG\" id=\"someGseORG\">\n        <DA name=\"setSrcRef\" valImport=\"true\" valKind=\"RO\" />\n    </DOType>\n    <DOType cdc=\"ORG\" id=\"someSmvORG\">\n        <DA name=\"setSrcRef\" />\n    </DOType>\n</DataTypeTemplates>\n</SCL>";
