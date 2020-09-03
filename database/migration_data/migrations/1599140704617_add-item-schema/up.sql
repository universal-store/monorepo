CREATE TABLE public."StoreItem" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "barcodeId" bigint NOT NULL,
    quantity text NOT NULL,
    price money NOT NULL,
    "shortName" text,
    "longName" text NOT NULL,
    description text,
    purchased boolean DEFAULT false NOT NULL
);
ALTER TABLE ONLY public."StoreItem"
    ADD CONSTRAINT "StoreItem_barcodeId_key" UNIQUE ("barcodeId");
ALTER TABLE ONLY public."StoreItem"
    ADD CONSTRAINT "StoreItem_pkey" PRIMARY KEY ("barcodeId");
