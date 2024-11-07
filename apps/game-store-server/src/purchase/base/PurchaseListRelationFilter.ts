/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PurchaseWhereInput } from "./PurchaseWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PurchaseListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PurchaseWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseWhereInput)
  @IsOptional()
  @Field(() => PurchaseWhereInput, {
    nullable: true,
  })
  every?: PurchaseWhereInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseWhereInput)
  @IsOptional()
  @Field(() => PurchaseWhereInput, {
    nullable: true,
  })
  some?: PurchaseWhereInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseWhereInput,
  })
  @ValidateNested()
  @Type(() => PurchaseWhereInput)
  @IsOptional()
  @Field(() => PurchaseWhereInput, {
    nullable: true,
  })
  none?: PurchaseWhereInput;
}
export { PurchaseListRelationFilter as PurchaseListRelationFilter };