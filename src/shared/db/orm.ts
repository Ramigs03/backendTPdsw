import { MikroORM } from '@mikro-orm/mysql';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

export const ORM = await MikroORM.init({
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  dbName: 'veterinaria',
  clientUrl: 'mysql://root:admin@localhost:3306/veterinaria',
  highlighter: new SqlHighlighter(),
  debug: true,
  schemaGenerator: {
    //Never in Production, only in dev
    disableForeignKeys: true,
    createForeignKeyConstraints: true,
    ignoreSchema: [],
  },
});

export const syncSchema = async () => {
  const generator = ORM.getSchemaGenerator();
  /*
    await generator.dropSchema()
    await generator.createSchema()
    */
  await generator.updateSchema();
};
