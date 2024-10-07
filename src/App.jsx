import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FlexBoxJustifyContent, FlexBoxDirection, FlexBoxAlignItems, Label, Bar, Page, Panel, Text, Title, TabContainer, Tab, Button, FlexBox, RadioButton } from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/company-view.js";
import "@ui5/webcomponents-icons/dist/checklist.js";
import "@ui5/webcomponents-icons/dist/high-priority.js";
import { useId } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const uniqueId = useId();

  return (



    <>

      {/*
footer={<Bar design="FloatingFooter" endContent={<><Button design="Positive">Accept</Button><Button design="Negative">Decline</Button><Button design="Transparent">Cancel</Button></>} startContent={<Button icon="home" title="Go Home" />} />}
          header={<Bar design="Header" endContent={<Button icon="settings" title="Go to Settings" />} startContent={<Button icon="home" title="Go Home" />}><Label>Title</Label></Bar>}

*/}
      <Page
        backgroundDesign="Solid"
        style={{
          height: '500px'
        }}>
        <TabContainer
          contentBackgroundDesign="Solid"
          headerBackgroundDesign="Solid"
          onMove={function ks() { }}
          onMoveOver={function ks() { }}
          onTabSelect={function ks() { }}
          tabLayout="Standard"
        >
          <Tab
            icon="company-view"
            selected
            text="Grösse der Veranstaltung"
          >



          

            <FlexBox style={{
              width: '600px'
            }} justifyContent={FlexBoxJustifyContent.SpaceBetween}>
              <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}
                aria-labelledby={`${uniqueId}-vertical`}
                direction={FlexBoxDirection.Column} role="radiogroup">
                <Label id={`${uniqueId}-vertical`}>Erwartete Anzahl der Teilnehmer und Besucher: </Label>
                <RadioButton name="X" text="0 - 499" />
                <RadioButton name="X" text="500 - 1500" />
                <RadioButton  name="X" text="1501 - 3000" />
                <RadioButton  name="X" text="3001 - 6000" />
                <RadioButton  name="X" text="6001 - 10000" />
                <RadioButton  name="X" text="10001 - 15000" />
                <RadioButton  name="X" text="15001 - 20000" />
                <RadioButton  name="X" text="20001 - 30000" />
                <RadioButton  name="X" text="30001 - 40000" />
                <RadioButton  name="X" text="40001 - 50000" />
                <RadioButton  name="X" text="50001 - 60000" />
                <RadioButton  name="X" text="60001 - 70000" />
                <RadioButton  name="X" text="70001 - 80000" />
                <RadioButton  name="X" text="80001 - 90000" />
                <RadioButton  name="X" text="90001 - 100000" />

              </FlexBox>
            </FlexBox>
          </Tab>
          <Tab

            icon="checklist"
            text="Art der Veranstaltung"
          >
            Content Tab 2
          </Tab>
          <Tab
            icon="high-priority"
            text="Risikozuschl&auml;ge"
          >
            Content Tab 3
          </Tab>
          <Tab
            icon="employee"
            text="Ergebnis"
          >
            Content Tab 4
          </Tab>

        </TabContainer>

      </Page >

    </>
  )
}

export default App
