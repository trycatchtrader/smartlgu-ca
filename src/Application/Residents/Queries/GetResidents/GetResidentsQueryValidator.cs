namespace SmartLGU.Application.Residents.Queries.GetResidents;

public class GetResidentsQueryValidator : AbstractValidator<GetResidentsQuery>
{
    public GetResidentsQueryValidator()
    {
        RuleFor(v => v.Search).MaximumLength(120);
        RuleFor(v => v.Barangay).MaximumLength(100);
        RuleFor(v => v.Status).MaximumLength(40);
    }
}
