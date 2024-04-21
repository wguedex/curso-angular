import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({
    unique: true,
    required: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password?: string;

  @Prop({
    minlength: 6,
    required: true,
  })
  name: string;

  @Prop({
    type: [String],
    default:['user']
  })
  roles: string[];


  @Prop({
    default: true,
  })
  isActive: string;
}

export const userSchema = SchemaFactory.createForClass(User);