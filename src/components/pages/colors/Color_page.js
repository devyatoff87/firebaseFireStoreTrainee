import React, { useState, useEffect } from "react";
import db from "firebase";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import ColorItem from "components/comps/color-item/ColorItem";
import Form from "components/comps/form/Form";
import PromptCard from "components/comps/prompt-card/PromptCard";
import {
  onNewHandle,
  onEditHandle,
  onRemoveHandle,
} from "components/utils/firebase-funcs";
import "./Color_page.scss";
import Card from "components/comps/card/Card";
import Overlay from "components/comps/overlay/Overlay";

const ColorPage = () => {
  const [colors, setColors] = useState([]);
  const [promptCard, setPromptCard] = useState(() => false);
  const [editForm, setEditForm] = useState(() => false);
  const [temp, setTemp] = useState(() => {});

  useEffect(() => {}, []);

  useEffect(() => {
    const collectionRef = collection(db, "colors");
    const qr = query(collectionRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(qr, (snapshot) => {
      setColors(snapshot.docs.map((itm) => ({ ...itm.data(), id: itm.id })));
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <div className="container">
      {editForm && (
        <>
          <Card>
            <Form
              className="form-1"
              title="Edit color"
              onCallback={(itm) => {
                onEditHandle(temp, itm);
                setEditForm(false);
              }}
              btnTxt="Edit color"
            />
          </Card>
          <Overlay colored={true} onClick={() => setEditForm(false)} />
        </>
      )}
      {promptCard && (
        <>
          <Card>
            <PromptCard
              btnA="Delete"
              btnB="Cancel"
              title="Really wanna delete this one?"
              onCallbackRemove={() => {
                onRemoveHandle(temp);
                setPromptCard(false);
                setTemp({});
              }}
              onCallbackCancel={() => {
                setPromptCard(false);
                setTemp({});
              }}
            />
          </Card>
          <Overlay colored={false} onClick={() => setPromptCard(false)} />
        </>
      )}

      <h1>Color page</h1>
      <div className=" mt-5">
        <Form
          title="Add new color"
          className="form-1"
          onCallback={onNewHandle}
          btnTxt="Add new color"
        />
        <div className="mt-4">
          {colors.length ? (
            colors.map((color) => {
              return (
                <ColorItem
                  onCallbackUpdate={(id) => {
                    setTemp(id);
                    setEditForm(true);
                  }}
                  onCallbackDelete={(id) => {
                    setPromptCard(true);
                    setTemp(id);
                  }}
                  key={color.id}
                  color={color}
                />
              );
            })
          ) : (
            <h3>No colors. Add one</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorPage;
