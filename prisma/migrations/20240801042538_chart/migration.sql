-- CreateTable
CREATE TABLE "chart" (
    "id" SERIAL NOT NULL,
    "quantity" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "chart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chart_productId_key" ON "chart"("productId");

-- AddForeignKey
ALTER TABLE "chart" ADD CONSTRAINT "chart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
