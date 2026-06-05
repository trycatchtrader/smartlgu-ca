namespace SmartLGU.Application.Residents.Queries.GetResidentById;

public class GetResidentByIdQueryValidator : AbstractValidator<GetResidentByIdQuery>
{
    public GetResidentByIdQueryValidator()
    {
        RuleFor(v => v.Id).GreaterThan(0);
    }
}
